import React from 'react';
import ComingSoon from '../components/comingsoon/ComingSoon';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import OurProduct from '../components/ourproduct/OurProduct';
import Video from '../components/video/Video';
import Footer from '../components/footer/Footer';



const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <ComingSoon/>
            <OurProduct/>
            <Video/>
            <Footer/>
            
        </div>
    );
};

export default Home;