import React from 'react';
import './Header.scss';
import logo from 'assets/svg/Logo.svg';

const Header = () => (
  <div className="header">
    <img className="header_logo" src={logo} alt="Search" />
  </div>
);

export default Header;
