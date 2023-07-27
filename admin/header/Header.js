// Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
        <div>
        <h1 className='head'>learn.co</h1>
        </div>
    <div>
    <button className='btnout'><Link to='/'><FiLogOut/></Link></button>
    </div>
    </div>
  );
};

export default Header;
