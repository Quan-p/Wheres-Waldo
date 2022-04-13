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
            <div className="actions">
                <button className='closeBtn' onClick={changeVis}>
                    close
                    
                </button>
            </div>
      </div>
    ) : (false);
}

export default GameEnd;