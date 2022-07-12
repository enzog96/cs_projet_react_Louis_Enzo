import React from 'react';
import './Header.css'
import Banner from '../../assets/banner.png'
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Header = () => {
    return (
        <div className='header'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img src={Banner} alt="" />
                    <div className='header-text'>
                        <h1>LEATHER BAGS</h1>
                        <p>New Collection</p>
                        <button>SHOP NOW</button>
                    </div>  
                </SwiperSlide>
                <SwiperSlide>
                <img src={Banner} alt="" />
                    <div className='header-text'>
                        <h1>LEATHER BAGS</h1>
                        <p>New Collection</p>
                        <button>SHOP NOW</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <img src={Banner} alt="" />
                    <div className='header-text'>
                        <h1>LEATHER BAGS</h1>
                        <p>New Collection</p>
                        <button>SHOP NOW</button>
                    </div>
                </SwiperSlide>
            </Swiper>     
        </div>
    );
};

export default Header;