import React from 'react';
import './Header.css'
import Banner from '../../assets/banner.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-img'>
                <img src={Banner} alt="" />
            </div>
            <div className='header-text'>
                <h1>LEATHER BAGS</h1>
                <p>New Collection</p>
                <button>SHOP NOW</button>

            </div>       
        </div>
    );
};

export default Header;