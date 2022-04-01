import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/game1">Game 1</Link>
                </li>
                <li>
                    <Link to="/game2">Game 2</Link>
                </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav;