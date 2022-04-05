import React from "react";
import './DropdownMenu.styles.scss'

const DropdownMenu = (props) => {
    const charLocation = props.charLocation;
    const boardSize = props.boardSize;
    let xPos = props.userCoords[0];
    let yPos = props.userCoords[1];

    let menuLocation = {};
    menuLocation['--dropdown-left'] = xPos + 20 + 'px';
    menuLocation['--dropdown-top'] = yPos + 150 + 'px';

    const checkLocation = (char) => {};

    return (
        <div>
            <div className='dropdown' style={menuLocation}>
                <div className='table'>
                    {props.characterState.map((char) => {
                        return !char.found ? (
                            <div
                                key={char.name}
                                className='row'
                                onClick={() => checkLocation(char.name)}
                            >
                                
                                <p>{char.name}</p>
                            </div>
                        ) : (false);
                    })}
                </div>
            </div>
        </div>
    );
};
    

export default DropdownMenu;