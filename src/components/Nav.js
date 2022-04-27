import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
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
                        <Link to="/Wheres-Waldo/">Home</Link>
                    </div>
                    <div>
                        <Link to="/Game1">Game 1</Link>
                    </div>
                    <div>
                        <Link to="/Game2">Game 2</Link>
                    </div>
                </div>
            </nav>
            <h1 className='game-title'>Hide and Seek</h1>
            <Outlet />
        </div>
    )
}

export default Nav;