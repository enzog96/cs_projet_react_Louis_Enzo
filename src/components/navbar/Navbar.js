import React, { useState } from 'react';
import {NavLink} from "react-router-dom"
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { BsBag} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import { FaBars, FaTimes} from 'react-icons/fa'
import { inbasketlist } from '../products/productCard';


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        if (open === false) {
            setOpen(true)  
        } else if (open === true) {
            setOpen(false)  
    }
    }
   

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
                <NavLink to= ''>
                    <BsBag onClick={handleClick}  className='logo2' size={25}/>
                </NavLink> 
            </div>
            <div className='hamburger' onClick={handleNav}>
                        {nav ? (<FaTimes size={20} style={{color: '#ffffff'}}/>) : (<FaBars size={20}/>)}
            </div>
            {open && (
                <div className="container-cart">
                    <NavLink to='/basket'>
                    <table>
                        <tbody>
                        {inbasketlist.map((product)=>(
                                <tr className="row-inbasket">
                                    <td className="cell-inbasket"><img style={{maxWidth: "50%"}}src={product.img} alt="" /></td>
                                    <td className="cell-inbasket"><p>{product.name}</p></td>
                                    <td className="cell-inbasket"><p>1 X {product.price}$</p></td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
                        <button className='cart-btn'>VIEW BASKET</button>
                    </NavLink>
                </div>
            )
                
            

            }
        </div>
        
        
    );
};

export default Navbar;