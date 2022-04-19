import React, { useState } from "react";
import './GameEnd.styles.scss';

const GameEnd = (props) => {
    const [visibility, setVisibility] = useState('modal-show');

    const changeVis = () => {
        setVisibility('modal-hidden');
    };

    return props.showModal ? (
        <div className={visibility} id="modal">
            <h2>Modal Window</h2>
            <div className="content">content</div>
            <div className='close-container' onClick={changeVis}>
                <div className="leftright"></div>
                <div className="rightleft"></div>
                <label className="close" >close</label>
            </div>
            {/* <button className='closeBtn' >
                close
            </button> */}
            
      </div>
    ) : (false);
}

export default GameEnd;