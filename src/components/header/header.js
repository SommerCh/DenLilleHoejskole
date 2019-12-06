import React from 'react';
import Logo from '../header/headerImg/skoleLogo.png';
import {NavLink} from 'react-router-dom';
import Navbar from './navbar';
import './header.css'
const Header = () => {
return (
<div className="header">
<NavLink to="/"> <img className="logo" src={Logo} alt="lo" /></NavLink>
   
    <Navbar />
</div>
);
}

export default Header;