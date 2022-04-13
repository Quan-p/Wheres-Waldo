import React, {useState} from "react";
import './Popup.styles.scss';

const Popup = (props) => {
    const [showAlert, setShowAlert] = useState('alert-shown');

    const changeVis = () => {
        setShowAlert('alert-hidden');
    };
    setTimeout(() => {
        props.setPopup(false);
    }, 4000);

    return props.popup ? (
        <div>
            <div
            className={showAlert}
            onTransitionEnd={changeVis}
            >
            <div>You found one!</div>
            </div>
         </div>
    ) : (false);
}
export default Popup;