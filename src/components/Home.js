import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router";
const Home = () => {
    const [difficulty, setDifficulty] = useState();
    const [playerName, setPlayerName] = useState();
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(difficulty);
        console.log(playerName);
    };

    return (
        <>
            <h1>HomePage</h1>
            <div className='instructions'>
                <div className='goal'>
                    <h2>Goal</h2>
                    <p>
                        Find the three hidden characters within each image.
                    </p>
                </div>
                <div className='howTo'>
                    <h2>How to Play</h2>
                    <ol>
                        <li>Enter your name and difficulty then click "Play".</li>
                        <li>The timer will start once the image loads.</li>
                        <li>Find the location of a character and click on them.</li>
                        <li>Choose the correct character from the list.</li>
                        <li>The game will end once all 3 are found.</li>
                        <li>See where you placed on the leaderboard.</li>
                    </ol>
                </div>
            </div>
            <form className='playGame' onSubmit={handleSubmit}>
                <h2>Enter Your Name</h2>
                <input type='text' id='name' placeholder='Anonymous' onChange={(e) => setPlayerName(e.target.value)} required></input>
                <p>Difficulty:</p>
                <input type='radio' name='difficulty' value='/Game1' onChange={(e) => setDifficulty('/Game1')} />Easy
                <input type='radio' name='difficulty' value='/Game2' onChange={(e) => setDifficulty('/Game2')} />Hard
                <br/>
                <br/>
                <button type='submit'>PLAY</button>
            </form>
        </>
    )
}

export default Home;