import { Outlet, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.styles.scss'
const Nav = () => {
    return (
        <>
            <nav className='dropdown-nav'>
                <button className="dropbtn">
                    <MenuIcon />
                </button>
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