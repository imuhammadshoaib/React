import logo from '../logo.svg';
import React from 'react'

const Header = () => {
    return(
        <div>
    <header>
        <img src={logo} alt="logo" style={{width: 80 + 'px'}}/>
    </header>
    <h1>Hello World</h1>
    </div>
);
}
export default Header