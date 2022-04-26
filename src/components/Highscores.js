import React, { useEffect } from "react";
import { useLocation } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { db, highScores, highScores2, getHighScores } from '../firebase';
import './Highscores.styles.scss';

const Highscores = (props) => {
    let location = useLocation();
    highScores.sort((a, b) => a.sec - b.sec);
    let topTen = highScores.slice(0, 10);
    
    highScores2.sort((a, b) => a.sec - b.sec);
    let topTen2 = highScores2.slice(0, 10);

    return (
        <div className='highscore-container'>
            
            {(location.pathname === '/Game1') ? (topTen.map((player) => (
                <div className='label-container' key={uuidv4()}>
                    <div className='label'>
                        Name: 
                    </div>
                    <div className='label-content'>
                    {player.Name}
                    </div> 
                    <div className='label'>
                        Time: 
                    </div>
                    <div className='label-content'>
                        {Math.floor(player.sec % 3600 / 60).toString().padStart(2,'0')}:{Math.floor(player.sec % 60).toString().padStart(2,'0')}
                    </div>
                </div>
            ))) : topTen2.map((player) => (
                <div className='label-container' key={uuidv4()}>
                    Name: {player.Name} Time: {Math.floor(player.sec % 3600 / 60).toString().padStart(2,'0')}:{Math.floor(player.sec % 60).toString().padStart(2,'0')} 
                </div>
            ))}
        </div>
    )
} 

export default Highscores;
