import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import './style.css';

const Header = () => (
    <header className="header">
        <div className="mdl-grid">
            <Link to={`/`}>
                <div className="mdl-cell--12-col">
                    <img alt="Logo" src={logo} className="header_logo" />
                </div>
            </Link>
        </div>

    </header>
);

export default Header;