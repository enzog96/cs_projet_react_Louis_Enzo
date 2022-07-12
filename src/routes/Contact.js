import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Minimap from '../components/contact/minimap/minimap';
import Form from '../components/contact/form/form';
import Footer from "../components/footer/Footer";


export default function Contact() {  
    return( 
    <div>
        <Navbar/>
        <Banner title="Contact" />
    <div className='container-contact'>
    <div className="aboutCol">    
        <Minimap/>
        <Form/>
    </div>
    <Footer/>
    </div>
    </div>
)
}