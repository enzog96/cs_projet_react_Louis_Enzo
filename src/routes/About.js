import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Textaboutus from '../components/about-us/text-aboutus/text-aboutus';
import Imgaboutus from '../components/about-us/img-aboutus/img-aboutus';


export default function About() {
    return( 
        <div>
            <Navbar/>
            <Banner title="About" />
        <div className="aboutCol">
            <Textaboutus/>
            <Imgaboutus/>
        </div>
        </div>
    )
}