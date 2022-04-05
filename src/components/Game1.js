import famous_dogs from '../assets/famous_dogs.jpg';
import usePopupMenu from './usePopupMenu';
import './game.styles.scss'

const Game1 = ({ menu }) => {
    
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