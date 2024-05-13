import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const auth = { token: true };

    return (
        <>
            <nav>

                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
                    Home
                </NavLink>

                {auth.token &&
                    <>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
                            Contact
                        </NavLink>

                       
                    </>
                }
            </nav>
        </>
    )
}