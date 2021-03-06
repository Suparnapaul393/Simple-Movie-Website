import React from 'react';
import Search from './Search';
import { Link } from 'react-router';

import '../styles/Header.sass';

const Logo = () => (
    <Link className="header-link" to="/">
        Demo-Streaming
    </Link>
);

function AppBarHeader({ ...rest }) {
    return (
        <div className="header">
            <div className="header-container">
                <div className="logo"><Logo/></div>
                <Search {...rest} />
                <div className="github-link">
                    <a
                        className="header-link"
                        href="https://github.com/Suparnapaul393/Simple-Movie-Website"
                        target="_blank"
                    >
                        GitHub
                    </a>
                </div>
                <div className="favorites">
                    <Link className="header-link" to="/favorites">
                        Favorites
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AppBarHeader;
