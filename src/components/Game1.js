import { useState } from 'react';
import famous_dogs from '../assets/famous_dogs.jpg';
import CopperHound from '../assets/characters/CopperHound.png';
import Max from '../assets/characters/Max.png';
import Snuffles from '../assets/characters/Snuffles.png';
import { db, charList } from '../firebase';
import DropdownMenu from './DropdownMenu';
import './game.styles.scss';
import GameEnd from './GameEnd';

const charInfo = [
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
    const [characterInfo, setCharacterInfo] = useState(charInfo);
    const [userCoords, setUserCoords] = useState([]);
    const [cursorCoords, setCursorCoords] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
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

    const handleFound = (name) => {
        setCharacterInfo((state) => {
            const characters = state.map((char) => {
                if (char.name === name) {
                    char.found = true;
                if (characterInfo.every((char) => char.found === true)) {
                    setShowModal(true); 
                }
                return char;
                } else {
                return char;
                }
            });
            return characters;
        }); 
    }

    

    return (
        <>  
            <div className='header'>
                <h1>Game 1</h1>
                <div className='smallImg'>
                    <img alt='dog1' src={CopperHound}/>
                    <img alt='dog2' src={Max}/>
                    <img alt='dog3' src={Snuffles}/>
                </div>
            </div>
            <div className='img-container'>
                <img src={famous_dogs} alt='dogs' onClick={handleClick} />
                {showDropdown && (
                    <DropdownMenu 
                        charInfo={charInfo}
                        setShowDropdown={setShowDropdown}
                        userCoords={userCoords}
                        cursorCoords={cursorCoords}
                        //get location from firebase db
                        charList={charList}
                        boardSize={boardSize}
                        handleFound={handleFound}
                    />
                )}
                <GameEnd showModal={showModal} />
            </div>
            
        </>
    )
}

export default Game1;