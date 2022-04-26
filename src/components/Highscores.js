import React from "react";
import { useLocation } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { highScores, highScores2 } from '../firebase';
import './Highscores.styles.scss';

const Highscores = (props) => {
    let location = useLocation();
    console.log(location.pathname);
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
                    {player.Name} 
                    <div className='label'>
                        Time: 
                    </div>
                    {Math.floor(player.sec % 3600 / 60).toString().padStart(2,'0')}:{Math.floor(player.sec % 60).toString().padStart(2,'0')} 
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
