import React from 'react';
import './Heart.css'
import Navbar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';

const Heart = () => {
    return (
        <div>
            <Navbar/>
            <Banner title="COUP DE COEUR" />
            <Footer/>
        </div>
    );
};

export default Heart;