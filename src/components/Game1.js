import { useState } from 'react';
import famous_dogs from '../assets/famous_dogs.jpg';
import CopperHound from '../assets/characters/CopperHound.png';
import Max from '../assets/characters/Max.png';
import Snuffles from '../assets/characters/Snuffles.png';
import { db, charList } from '../firebase';
import DropdownMenu from './DropdownMenu';
import './game.styles.scss';

const charState = [
    {
        name: 'Copper',
        found: false,
        image: CopperHound,
    },
    {
        name: 'Max',
        found: false,
        image: Max,
    },
    {
        name: 'Snuffles',
        found: false,
        image: Snuffles,
    },
];

let boardSize;

const Game1 = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [characterState, setCharacterState] = useState(charState);
    const [userCoords, setUserCoords] = useState([]);
    const [cursorCoords, setCursorCoords] = useState([]);

    const origWidth = 3000;
    const origHeight = 3000;

    const handleClick = (e) => {
        boardSize = e.target.getBoundingClientRect();
        
        // absolute coordinates on image
        let x = e.clientX - boardSize.left;
        let y = e.clientY - boardSize.top;
        setCursorCoords([x, y]);

        const widthRatio = boardSize.width / origWidth;
        const heightRatio = boardSize.height / origHeight;

        const originalX = x / widthRatio;
        const originalY = y / heightRatio;

        const xPercent = originalX/origWidth;
        const yPercent = originalY/origHeight;
        setUserCoords([xPercent, yPercent]);
    
        showDropdown ? setShowDropdown(false) : setShowDropdown(true);
    }

    return (
        <>
            <h1>Game 1</h1>
            <div className='img-container'>
                <img src={famous_dogs} alt='dogs' onClick={handleClick} />
                {showDropdown && (
                    <DropdownMenu 
                        characterState={characterState}
                        setShowDropdown={setShowDropdown}
                        userCoords={userCoords}
                        cursorCoords={cursorCoords}
                        //get location from firebase db
                        charList={charList}
                        boardSize={boardSize}
                    />
                )}
            </div>
        </>
    )
}

export default Game1;