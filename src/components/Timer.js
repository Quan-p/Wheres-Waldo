import React, { useState, useEffect } from 'react';

function Timer(gameOver) {
    const [timer, setTimer] = useState(0);

    useEffect(
        () => {
            let interval;
            if (!gameOver) {
                // start interval/timer
                interval = setInterval(() => {
                setTimer((timer) => timer + 1);
                }, 1000);
            } else if (gameOver) {
                // stops/resets timer
                clearInterval(interval);
                setTimer(0);
            }
        
            // when component unmounts stops timer / clearInterval
            return () => {
                clearInterval(interval);
            };
            },
            [gameOver]
        );
  return <div>{timer}</div>; 
}

export default Timer;