import React from "react";
import { db, highScores } from '../firebase';

const Highscores = () => {
    highScores.sort((a, b) => (a.Time - b.Time))
    let topTen = highScores.slice(0, 10);
    console.log(topTen);
    return (
        <div>
            {topTen.map((player) => (
                <div>Name: {player.Name} Time: {player.Time}</div>
            ))}
        </div>
    )
} 

export default Highscores;
