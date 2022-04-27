import React from "react";
import { useLocation } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import './Highscores.styles.scss';

const Highscores = (props) => {
    let location = useLocation();

    return (
        <div className='highscore-container'>
            
            {(location.pathname === '/Game1') ? (props.highScore.map((player) => (
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
            ))) : props.highScore2.map((player) => (
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
            ))}
        </div>
    )
} 

export default Highscores;
