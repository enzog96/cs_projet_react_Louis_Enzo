import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';

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