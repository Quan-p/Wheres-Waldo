import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { highScores } from '../firebase';

const Highscores = () => {
    highScores.sort((a, b) => a.sec - b.sec);
    let topTen = highScores.slice(0, 10);
    
    return (
        <div>
            {topTen.map((player) => (
                <div key={uuidv4()}>
                    Name: {player.Name} Time: {Math.floor(player.sec % 3600 / 60).toString().padStart(2,'0')}:{Math.floor(player.sec % 60).toString().padStart(2,'0')} 
                </div>
            ))}
        </div>
    )
} 

export default Highscores;
