import { Outlet, Link } from 'react-router-dom';
import './Nav.styles.scss'
const Nav = () => {
    return (
        <>
            <nav className='dropdown-nav'>
                <button className="dropbtn">Dropdown</button>
                    <div className='dropdown-content'>
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/game1">Game 1</Link>
                        </div>
                        <div>
                            <Link to="/game2">Game 2</Link>
                        </div>
                    </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav;