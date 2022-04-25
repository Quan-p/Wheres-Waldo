import { useState, useEffect } from 'react';
import AD from '../assets/AD2.222.jpg';
import KennyMcCormick from '../assets/characters/KennyMcCormick.png';
import Meg_Griffin from '../assets/characters/Meg_Griffin.png';
import Tom from '../assets/characters/Tom.png';
import { charList } from '../firebase';
import DropdownMenu from './DropdownMenu';
import './game.styles.scss';
import GameEnd from './GameEnd';
import Popup from './Popup';
import Timer from './Timer';

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
    const [gameBackground, setGameBackground] = useState();
    const [showDropdown, setShowDropdown] = useState(false);
    const [characterInfo, setCharacterInfo] = useState(charInfo);
    const [userCoords, setUserCoords] = useState([]);
    const [cursorCoords, setCursorCoords] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [popup, setPopup] = useState(false);
    const [foundMsg, setFoundMsg] = useState();
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

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
                    setFoundMsg(char.name);
                if (characterInfo.every((char) => char.found === true)) {
                    setShowModal(true);
                    handleWin(); 
                }
                return char;
                } else {
                return char;
                }
            });
            return characters;
        }); 
    }

    const handleStart = () => {
        console.log('Game Started');
        setGameBackground(AD);
        };

    const handleWin = () => {
        console.log('You WIN!');
        setTimerOn(false)
    }

    const handleReset = () => {
        setCharacterInfo((state) => {
            const characters = state.map((char) => {
                if (char.found === true) {
                    char.found = false;
                } return char;
            });
            return characters;
        });
    }

    useEffect(() => {
        handleStart();
        setTime(0);
        setTimerOn(true);
        handleReset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Timer 
                timerOn={timerOn}
                time={time}
                setTime={setTime}
            />
            <Popup popup={popup} setPopup={setPopup} foundMsg={foundMsg} />
            <div className='header'>
                
                <h1>Game 2</h1>
                <div className='smallImg'>
                    <img alt='dog1' src={KennyMcCormick}/>
                    <img alt='dog2' src={Meg_Griffin}/>
                    <img alt='dog3' src={Tom}/>
                </div>
            </div>
            
            <div className='img-container'>
                <img src={gameBackground} alt='artwork' onClick={handleClick}></img>
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
                        setPopup={setPopup}
                    />
                )}
                <GameEnd 
                    showModal={showModal} 
                    time={time} 
                    setTime={setTime} 
                    setTimerOn={setTimerOn}
                    setCharacterInfo={setCharacterInfo}
                />
            </div>
            <footer>
                <div className='credits'>
                   <div className='art'>
                        A.D. 2.222
                    </div>
                    <div className='artist'>
                        Artist: Egor Klyuchnyk
                    </div>
                    
                </div>
                <div className='link-container'>
                    <a className='artist-link' href='https://www.artstation.com/chekavo'>
                        See his works here!
                    </a>
                </div>
                
            </footer>
        </>
    )
}

export default Game2;