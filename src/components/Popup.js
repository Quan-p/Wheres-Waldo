import React, {useState} from "react";
import './Popup.styles.scss';

const Popup = (props) => {
    const [showAlert, setShowAlert] = useState('alert-shown');

    const changeVis = () => {
        setShowAlert('alert-hidden');
    };
    

    return props.popup ? (
        <div className='message-container'>
            <div
            className={showAlert}
            onTransitionEnd={changeVis}
            >
            <div>You found {props.foundMsg}!</div>
            </div>
         </div>
    ) : (false);
}
export default Popup;