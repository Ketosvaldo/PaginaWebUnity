import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {

    const {title} = props;

    return ( 
        <header className="App-header">
            <img src={require('../img/LogoReact.png')} className="App-logo" alt="logo"/>
            <h1 className="App-title">{title}</h1>
            <div className="App-Routes">
                <a href="/" className="Text">Home</a>
                <a href="/gameScreen" className="Text">Games</a>
                <a href="/about" className="Text">About</a>
            </div>
        </header>
    );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;