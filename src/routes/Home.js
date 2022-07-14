import React from 'react';
import ComingSoon from '../components/comingsoon/ComingSoon';
import Header from '../components/header/Header';
import Sold from '../components/sold/Sold';
import Navbar from '../components/navbar/Navbar';
import OurProduct from '../components/ourproduct/OurProduct';
import Video from '../components/video/Video';
import Footer from '../components/footer/Footer';
import Scrollup from '../components/scrollup/Scrollup';



const Home = () => {
    return (
        <div>
            <Sold/>
            <Navbar/>
            <Header/>
            <ComingSoon/>
            <OurProduct/>
            <Video/>
            <Footer/>
            <Scrollup/>
        </div>
    );
};

export default Home;