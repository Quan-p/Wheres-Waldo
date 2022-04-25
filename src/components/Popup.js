import React from "react";
import './Popup.styles.scss';

const Popup = (props) => {
    
    return  props.popup ? (
        <div className='message-container'>
            <div className='message'>
            You found {props.foundMsg}!
            </div>
         </div>
    ): false;
        
}
export default Popup;