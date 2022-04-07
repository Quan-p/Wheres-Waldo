import React from "react";
import './DropdownMenu.styles.scss'

const DropdownMenu = (props) => {
    const charList = props.charList;
    const boardSize = props.boardSize;
    let xPos = props.userCoords[0];
    let yPos = props.userCoords[1];

    let menuLocation = {};
    menuLocation['--dropdown-left'] = xPos + 20 + 'px';
    menuLocation['--dropdown-top'] = yPos + 150 + 'px';

    const checkLocation = (char) => {
        //console.log(charList[0].coords.x)
        let charName = char;
        let xCoord = charList.some(e => e.coords.x === xPos);
        
        for(let i = 0; i < charList.length; i++) {
            if (xPos === charList[i].coords.x) {
                console.log('success')
            } else console.log('fail')

        }
        // if(charName) {
        //      console.log('success')
        // } else return console.log('fail')
        // if(xPos === charList[0].coords.x) {
        //     console.log('success')
        // } else console.log('fail')
    };

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