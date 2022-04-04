import famous_dogs from '../assets/famous_dogs.jpg'
const Game1 = () => {
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