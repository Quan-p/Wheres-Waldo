import { useState } from 'react';
import AD from '../assets/AD2.222.jpg';
import KennyMcCormick from '../assets/characters/KennyMcCormick.png';
import Meg_Griffin from '../assets/characters/Meg_Griffin.png';
import Tom from '../assets/characters/Tom.png';
import { db, charList } from '../firebase';
import DropdownMenu from './DropdownMenu';
import GameEnd from './GameEnd';
import './game.styles.scss';
const charInfo = [
    {
        name: 'Kenny',
        found: false,
        image: KennyMcCormick,
    },
    {
        name: 'Meg',
        found: false,
        image: Meg_Griffin,
    },
    {
        name: 'Tom',
        found: false,
        image: Tom,
    },
];
    
let boardSize;

const Game2 = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [characterInfo, setCharacterInfo] = useState(charInfo);
    const [userCoords, setUserCoords] = useState([]);
    const [cursorCoords, setCursorCoords] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const origWidth = 1988;
    const origHeight = 3708;

    const handleClick = (e) => {
        boardSize = e.target.getBoundingClientRect();
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
                <h1>Game 2</h1>
                <div className='smallImg'>
                    <img alt='dog1' src={KennyMcCormick}/>
                    <img alt='dog2' src={Meg_Griffin}/>
                    <img alt='dog3' src={Tom}/>
                </div>
            </div>
            
            <div className='img-container'>
                <img src={AD} alt='artwork' onClick={handleClick}></img>
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

export default Game2;