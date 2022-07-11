import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { BsBag} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='nav'>
            <Link to='/'><img src={Logo} alt="" /></Link>
            <ul className='nav-menu'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/product'>Product</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='logo'>
                <AiOutlineHeart className='logo1' size={20}/>
                <p>|</p>
                <BsBag className='logo2' size={25}/>
            </div>
        </div>
    );
};

export default Navbar;