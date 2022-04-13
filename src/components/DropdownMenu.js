import React from "react";
import './DropdownMenu.styles.scss'

const DropdownMenu = (props) => {
    const charList = props.charList;
    const boardSize = props.boardSize;
    let xPos = props.userCoords[0];
    let yPos = props.userCoords[1];
    let xCursor = props.cursorCoords[0];
    let yCursor = props.cursorCoords[1];

    let menuLocation = {};
    menuLocation['--dropdown-left'] = xCursor + 10 + 'px';
    menuLocation['--dropdown-top'] = yCursor + 150 + 'px';

    const checkLocation = (char) => {
        let charAnswer;
        for(let i = 0; i < charList.length; i++) {
            if (
                xPos > charList[i].coords.x * .95 &&
                xPos < charList[i].coords.x * 1.05 &&
                yPos > charList[i].coords.y * .95 &&
                yPos < charList[i].coords.y * 1.05 
            ) {
                charAnswer = charList[i].name;
                setTimeout(() => {
                        props.setShowDropdown(false);
                }, 1200);

                if(char === charAnswer) {
                    console.log('You found ' + charList[i].name + '!');
                    props.handleFound(char);
                } else return console.log('wrong');
            }
        }
    };

    return (
        <div>
            <div className='dropdown' style={menuLocation}>
                <div className='table'>
                    {props.charInfo.map((char) => {
                        return !char.found ? (
                            <div
                                key={char.name}
                                className='row'
                                onClick={() => checkLocation(char.name)}
                            >
                                <div className='iconContainer'>
                                    <img alt='character' src={char.image}/>
                                </div>
                                
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