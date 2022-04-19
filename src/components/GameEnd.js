import React, { useState } from "react";
import Highscores from './Highscores';
import './GameEnd.styles.scss';

const GameEnd = (props) => {
    const [visibility, setVisibility] = useState('modal-show');

    const changeVis = () => {
        setVisibility('modal-hidden');
    };

    return props.showModal ? (
        <div className={visibility} id="modal">
            <div className='close-container' onClick={changeVis}>
                <div className="leftright"></div>
                <div className="rightleft"></div>
                <label className="close" >close</label>
            </div>
                
            <div className='main-modal'>
                <h2>Modal Window</h2>
                <div className="content">
                    <Highscores />
                </div>
            </div>
            
      </div>
    ) : (false);
}

export default GameEnd;