import React, { useState } from 'react';
import {Link} from "react-router-dom"
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
            <Link to='/'><img src={Logo} alt="" /></Link>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
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
                <a href="/Heart">
                    <AiOutlineHeart className='logo1' size={20} />
                </a>
                <p>|</p>
                <a href="/Basket">
                    <BsBag className='logo2' size={25}/>
                </a>  
            </div>
            <div className='hamburger' onClick={handleNav}>
                        {nav ? (<FaTimes size={20} style={{color: '#ffffff'}}/>) : (<FaBars size={20}/>)}
            </div>
        </div>
    );
};

export default Navbar;