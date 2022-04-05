import { useState } from 'react';
import famous_dogs from '../assets/famous_dogs.jpg';
import CopperHound from '../assets/characters/CopperHound.png';
import Max from '../assets/characters/Max.png';
import Snuffles from '../assets/characters/Snuffles.png';
import './game.styles.scss'
import DropdownMenu from './DropdownMenu';
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

    const handleClick = (e) => {
        boardSize = e.target.getBoundingClientRect();
        let x = e.clientX - boardSize.left;
        let y = e.clientY - boardSize.top;
        setUserCoords([x, y]);
        console.log(x, y);
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
                        //get location from firebase db
                        //charlocation={charlocation}
                        boardSize={boardSize}
                    />
                )}
            </div>
        </>
    )
}

export default Game1;