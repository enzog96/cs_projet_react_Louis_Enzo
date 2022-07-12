import React, { useState } from 'react';
import {NavLink} from "react-router-dom"
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { BsBag} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import { FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div className='navbar'>
            <NavLink to='/'><img src={Logo} alt="" /></NavLink>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <NavLink to='/' style={({ isActive }) => (isActive ? {color: 'red'}  : {color: 'black'} )}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/product' style={({ isActive }) => (isActive ? {color: 'red'}  : {color: 'black'} )}>Product</NavLink>
                </li>
                <li>
                    <NavLink to='/about' style={({ isActive }) => (isActive ? {color: 'red'}  : {color: 'black'} )}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' style={({ isActive }) => (isActive ? {color: 'red'}  : {color: 'black'} )}>Contact</NavLink>
                </li>
            </ul>
            <div className='logo'>
                <NavLink to='/heart'>
                    <AiOutlineHeart className='logo1' size={20} />
                </NavLink>
                <p>|</p>
                <NavLink to='/basket'>
                    <BsBag className='logo2' size={25}/>
                </NavLink> 
            </div>
            <div className='hamburger' onClick={handleNav}>
                        {nav ? (<FaTimes size={20} style={{color: '#ffffff'}}/>) : (<FaBars size={20}/>)}
            </div>
        </div>
    );
};

export default Navbar;