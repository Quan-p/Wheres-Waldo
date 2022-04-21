import React, { useState } from "react";
import Highscores from './Highscores';
import { addNewScore, highScores } from "../firebase";
import './GameEnd.styles.scss';

const GameEnd = (props) => {
    const [visibility, setVisibility] = useState('modal-show');
    const [playerName, setPlayerName] = useState();

    const changeVis = () => {
        setVisibility('modal-hidden');
    };

    let totalTime = props.time / 1000;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime - minutes * 60;

    highScores.sort((a, b) => {
        let amin = a.min;
        let bmin = b.min;
        let asec = a.sec;
        let bsec = b.sec;
        let atemp = amin+":"+asec;
        let btemp = bmin+":"+bsec;
        return atemp.localeCompare(btemp);
    });
    let slowestTime = highScores[highScores.length - 1];

    const handleSubmit = (e) => {
        e.preventDefault();
        changeVis();
        addNewScore(playerName, minutes, seconds);
    };

    return props.showModal ? (
        <div className={visibility} id="modal">
            <div className='close-container' onClick={changeVis}>
                <div className="leftright"></div>
                <div className="rightleft"></div>
                <label className="close" >close</label>
            </div>
                
            <div className='main-modal'>
                <h2>Modal Window</h2>
                <div className="content">
                    <div className='highscores'>
                        <Highscores /> 
                    </div>
                    <div>
                    {(minutes <= slowestTime.min && seconds < slowestTime.sec) ? 
                        <form className='score-submit' onSubmit={handleSubmit}>
                            <p>
                                Your Time: {minutes} Minutes { seconds} Seconds
                            </p>
                            <h2>Enter Name</h2>
                            <input type='text' id='name' placeholder='Anonymous' onChange={(e) => setPlayerName(e.target.value)} required></input>
                            <button type='submit'>SUBMIT</button>
                        </form>
                    :   <p>
                            Sorry, your time wasn't a high score.
                            <br/>
                            <br/>
                            Your Time: {minutes} Minutes { seconds} Seconds
                            <button className='restart-btn'>Play Again</button>
                        </p>}
                    </div>
                </div>
            </div>
            
      </div>
    ) : (false);
}

export default GameEnd;