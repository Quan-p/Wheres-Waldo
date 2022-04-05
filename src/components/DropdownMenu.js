import React from "react";

const DropdownMenu = (props) => {
    const charLocation = props.charLocation;
    const boardSize = props.boardSize;
    let xPos = props.userCoords[0];
    let yPos = props.userCoords[1];

    let menuLocation = {};
    menuLocation['--dropdown-left'] = xPos + 20 + 'px';
    menuLocation['--dropdown-top'] = yPos + 90 + 'px';


    return (
        <div>h</div>
    );
};
    

export default DropdownMenu;