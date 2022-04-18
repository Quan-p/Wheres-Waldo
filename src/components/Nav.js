import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Timer from './Timer';
import './Nav.styles.scss'
const Nav = () => {
    const [stickyClass, setStickyClass] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if(window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 100 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    }

    return (
        <div className={`nav-container ${stickyClass}`}>
            <nav className='dropdown-nav'>
                <div >
                    <button className="dropbtn">
                        <MenuIcon />
                    </button>
                </div>
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
            <Timer />
            <Outlet />
        </div>
    )
}

export default Nav;