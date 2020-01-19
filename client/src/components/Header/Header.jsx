import React from 'react';
import Menu from './Menu.jsx';
import './Header.css';

const Header = () => {

  return (
    <>
        <div className = "Header">
            <div className = "Logo"><h1>Kim Eui Rae</h1></div>
            <Menu></Menu>
        </div>
    </>
  );
};
export default Header;