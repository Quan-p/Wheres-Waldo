import React, { useState } from 'react';
import Highscores from './Highscores';
import { useLocation, useNavigate } from 'react-router';
import { addNewScore, addNewScore2 } from '../firebase';
import './GameEnd.styles.scss';

const GameEnd = (props) => {
    const [visibility, setVisibility] = useState('modal-show');
    const [playerName, setPlayerName] = useState('');
    let navigate = useNavigate();

    const changeVis = () => {
        setVisibility('modal-hidden');
    };

    let totalSec = props.time / 1000;
    
    let location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (location.pathname === '/Game1') {
            addNewScore(playerName, totalSec);
        } else if (location.pathname === '/Game2') {
            addNewScore2(playerName, totalSec);
        }
        
        props.setTime(0);
        props.setTimerOn(true);
        if (playerName !== '') {
            setPlayerName('')
        }
        props.setCharacterInfo((state) => {
            const characters = state.map((char) => {
                char.found = false;
                return char;
            });
            return characters;
        })

        navigate('/', { replace: true });
    };

    const handlePlayAgain = (e) => {
        e.preventDefault();

        props.setTime(0);
        props.setTimerOn(true);
        if (playerName !== '') {
            setPlayerName('')
        }
        props.setCharacterInfo((state) => {
            const characters = state.map((char) => {
                char.found = false;
                return char;
            });
            return characters;
        })

        navigate('/', { replace: true });
    }

    return props.showModal ? (
        <div className={visibility} id='modal'>
            <div className='close-container' onClick={changeVis}>
                <div className='leftright'></div>
                <div className='rightleft'></div>
                <label className='close' >close</label>
            </div>
                
            <div className='main-modal'>
                <h2>High Scores</h2>
                <div className='content'>
                    <div className='highscores'>
                        <Highscores highScore={props.highScore} highScore2={props.highScore2} /> 
                    </div>
                    <div>
                    {(totalSec < props.slowestTime) ? 
                        <form className='score-submit' onSubmit={handleSubmit}>
                            <p>
                                Your Time: {Math.floor(totalSec % 3600 / 60).toString().padStart(2,'0')}:{Math.floor(totalSec % 60).toString().padStart(2,'0')}
                            </p>
                            <h2 className='name-header'>Enter Name</h2>
                            <div className='form-group field'>
                                <input className='form-field' type='text' id='name' placeholder='Name' name='name' onChange={(e) => setPlayerName(e.target.value)} required></input>
                                <label className='form-label'>Name</label>
                            </div>
                            <button className='form-btn'type='submit'>SUBMIT</button>
                        </form>
                    :   <p>
                            Sorry, your time wasn't a high score.
                            <br/>
                            <br/>
                            Your Time: {Math.floor(totalSec % 3600 / 60).toString().padStart(2,'0')}:{Math.floor(totalSec % 60).toString().padStart(2,'0')}
                            <button className='form-btn' onSubmit={handlePlayAgain}>Play Again</button>
                        </p>}
                    </div>
                </div>
            </div>
            
      </div>
    ) : (false);
}

export default GameEnd;