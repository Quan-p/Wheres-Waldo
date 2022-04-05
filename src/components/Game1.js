import famous_dogs from '../assets/famous_dogs.jpg';
import CopperHound from '../assets/characters/CopperHound.png';
import Max from '../assets/characters/Max.png';
import Snuffles from '../assets/characters/Snuffles.png';
import './game.styles.scss'

const Game1 = () => {
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

    return (
        <>
            <h1>Game 1</h1>
            <div className='img-container'>
                <img src={famous_dogs} alt='dogs'></img>
            </div>
        </>
    )
}

export default Game1;