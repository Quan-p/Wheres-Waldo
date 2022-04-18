import React, { useState, useEffect } from 'react';

function Timer(props) {
    let sec = ("0" + (Math.floor(props.time / 1000) % 60)).slice(-2);
    let min = ("0" + (Math.floor(props.time / 60000) % 60)).slice(-2);

    useEffect(() => {
        let interval = null;

        if (props.timerOn) {
            interval = setInterval(() => {
              props.setTime((prevTime) => prevTime + 1000);
            }, 1000);
            } else if (!props.timerOn) {
            clearInterval(interval);
            }
            return () => clearInterval(interval);
    }, [props, props.timerOn]);
        
    
    return (
        <div className='timer-container'>
            <h1>{min}:{sec}</h1>
        </div>
    );  
}

export default Timer;
