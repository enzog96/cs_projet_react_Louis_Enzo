import React from 'react';
import './Footer.css';
import Payment from '../../assets/footer-payment-icon.png'
import {FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube} from 'react-icons/fa'


const footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="col touch">
                    <h3>GET IN TOUCH</h3>
                    <p>Any questions? Let us know in store at 8th floor,379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <div className='fontawesome'>
                        <FaFacebookF className='fa'/>
                        <FaInstagram className='fa'/>
                        <FaPinterestP className='fa'/>
                        <FaTwitter className='fa'/>
                        <FaYoutube className='fa'/>
                    </div>
                </div>
                <div className="col">
                    <h3>LINKS</h3>
                    <p>Search</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Returns</p>
                </div>
                <div className="col">
                    <h3>LINKS</h3>
                    <p>Search</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Returns</p>
                </div>
            </div>
            <div className='payment'>
                <img src={Payment} alt="" />
                <p>Copyright @ All rights reserved.</p>
            </div>
        </div>
    );
};

export default footer;