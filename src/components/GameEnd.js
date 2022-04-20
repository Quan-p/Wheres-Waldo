import React, { useState } from "react";
import Highscores from './Highscores';
import './GameEnd.styles.scss';

const GameEnd = (props) => {
    const [visibility, setVisibility] = useState('modal-show');
    const [playerName, setPlayerName] = useState();

    const changeVis = () => {
        setVisibility('modal-hidden');
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(playerName);
        changeVis();
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
                        <form className='score-submit' onSubmit={handleSubmit}>
                            <p>Your Time: </p>
                            <h2>Enter Name</h2>
                            <input type='text' id='name' placeholder='Anonymous' onChange={(e) => setPlayerName(e.target.value)} required></input>
                            <button type='submit'>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
            
      </div>
    ) : (false);
}

export default GameEnd;