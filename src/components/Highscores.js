import React from "react";
import { db, highScores } from '../firebase';

const Highscores = () => {
    highScores.sort((a, b) => {
        let amin = a.min;
        let bmin = b.min;
        let asec = a.sec;
        let bsec = b.sec;
        let atemp = amin+":"+asec;
        let btemp = bmin+":"+bsec;
        return atemp.localeCompare(btemp);
    });
    let topTen = highScores.slice(0, 10);
    return (
        <div>
            {topTen.map((player) => (
                <div>Name: {player.Name} Time: {player.min}:{player.sec}</div>
            ))}
        </div>
    )
} 

export default Highscores;