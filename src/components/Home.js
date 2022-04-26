import React, { useState } from "react";
import { useNavigate } from "react-router";
import './Home.styles.scss'

const Home = () => {
    const [difficulty, setDifficulty] = useState();
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(difficulty);
    };

    return (
        <div className='home'>
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
            <form className='diff-form' onSubmit={handleSubmit}>
                <h2>Difficulty:</h2>
                <input type='radio' name='difficulty' value='/game1' onChange={(e) => setDifficulty('/Game1')} required/>Easy
                <input type='radio' name='difficulty' value='/game2' onChange={(e) => setDifficulty('/Game2')} required/>Hard
                <br/>
                <br/>
                <button className='btn draw-border' type='submit'>PLAY</button>
            </form>
        </div>
    )
}

export default Home;