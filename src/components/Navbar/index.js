import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <>
            <Nav>
            
                <NavLink to="/" activestyle>
                <img src={logo} alt='logo'/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/LocalProducts" activestyle>
                        Local Products
                    </NavLink>
                    <NavLink to="/Sports" activestyle>
                        Sports
                    </NavLink>
                    <NavLink to="/Events" activestyle>
                        Events
                    </NavLink>
                    <NavLink to="/Visits" activestyle>
                        Visits
                    </NavLink>
                    <NavLink to="/Contact" activestyle>
                       Contact
                    </NavLink>
                    <NavLink to="/Sign-up" activestyle>
                       Sign Up
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
            
        </>
    )
}

export default Navbar;
