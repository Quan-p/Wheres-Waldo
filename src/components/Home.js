import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router";
const Home = () => {
    const [difficulty, setDifficulty] = useState();
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(difficulty);
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
                        <li>Select a difficulty then click "Play".</li>
                        <li>The timer will start once the image loads.</li>
                        <li>Find the location of a character and click on them.</li>
                        <li>Choose the correct character from the list.</li>
                        <li>The game will end once all 3 are found.</li>
                        <li>Submit your name and score if you got a new high score!</li>
                    </ol>
                </div>
            </div>
            <form className='playGame' onSubmit={handleSubmit}>
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