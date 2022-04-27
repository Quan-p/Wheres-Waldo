import React, { useEffect, useState } from 'react';
import famous_dogs from '../assets/famous_dogs.jpg';
import CopperHound from '../assets/characters/CopperHound.png';
import Max from '../assets/characters/Max.png';
import Snuffles from '../assets/characters/Snuffles.png';
import { db, charList } from '../firebase';
import { getDocs, collection } from '@firebase/firestore/lite';
import DropdownMenu from './DropdownMenu';
import './game.styles.scss';
import GameEnd from './GameEnd';
import Popup from './Popup';
import Timer from './Timer';

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

const Game1 = (props) => {
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
    const [highScore, setHighScore] = useState();
    const [slowestTime, setSlowestTime] = useState();

    const origWidth = 3000;
    const origHeight = 3000;

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
        setGameBackground(famous_dogs);
        };

    const handleWin = () => {
        console.log('You WIN!');
        setTimerOn(false);
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
    
    const getHighScores = async (db) => {
        let scoreArray = [];
        const querySnapshot = await getDocs(collection(db, "highscores"));
        querySnapshot.forEach((doc) => {
          let user = doc.data();
          scoreArray.push(user);
        });

        scoreArray.sort((a, b) => a.sec - b.sec);
        let topTen = scoreArray.slice(0, 10);
        setHighScore(topTen);
        let lastTime = topTen[topTen.length - 1].sec;
        setSlowestTime(lastTime);
    }

    useEffect(() => {
        handleStart();
        setTime(0);
        setTimerOn(true);
        handleReset();
        getHighScores(db);
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
                
                <h1>Game 1</h1>
                <div className='smallImg'>
                    <img alt='dog1' src={CopperHound}/>
                    <img alt='dog2' src={Max}/>
                    <img alt='dog3' src={Snuffles}/>
                </div>
            </div>

            <div className='img-container'>
                <img src={gameBackground} alt='dogs' onClick={handleClick} />
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
                    highScore={highScore}
                    slowestTime={slowestTime}
                />
            </div>
            <footer>
                <div className='credits'>
                   <div className='art'>
                        Famous Dogs
                    </div>
                    <div className='artist'>
                        Artist: Mxcq
                    </div>
                </div>
                <div className='link-container' >
                    <a className='artist-link' href='https://www.instagram.com/mxcq/'>
                        See his works here!
                    </a>
                </div>
                
            </footer>
        </>
    )
}

export default Game1;