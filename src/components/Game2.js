import { useState } from 'react';
import AD from '../assets/AD2.222.jpg';
import KennyMcCormick from '../assets/characters/KennyMcCormick.png';
import Meg_Griffin from '../assets/characters/Meg_Griffin.png';
import Tom from '../assets/characters/Tom.png';
import { db, charList } from '../firebase';
import DropdownMenu from './DropdownMenu';
import './game.styles.scss';
const charState = [
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
    const [characterState, setCharacterState] = useState(charState);
    const [userCoords, setUserCoords] = useState([]);

    const handleClick = (e) => {
        boardSize = e.target.getBoundingClientRect();
        let x = e.clientX - boardSize.left;
        let y = e.clientY - boardSize.top;
        setUserCoords([x, y]);
        console.log(x/boardSize.width, y/boardSize.bottom)
        //console.log(boardSize)
        console.log(y)
        showDropdown ? setShowDropdown(false) : setShowDropdown(true);
    }

    return (
        <>
            <h1>Game 2</h1>
            <div className='img-container'>
                <img src={AD} alt='artwork' onClick={handleClick}></img>
                {showDropdown && (
                    <DropdownMenu 
                        characterState={characterState}
                        setShowDropdown={setShowDropdown}
                        userCoords={userCoords}
                        //get location from firebase db
                        charList={charList}
                        boardSize={boardSize}
                    />
                )}
            </div>
            
        </>
    )
}

export default Game2;