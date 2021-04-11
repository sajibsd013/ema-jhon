import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import Navigation from './Navigation';


const Header = () => {
    return (
        <div className="header">
            <div className="text-center">
                <img  src={logo} alt="" />
            </div>

            <Navigation />

        </div>
    )
}

export default Header;

