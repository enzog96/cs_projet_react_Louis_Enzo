import React from 'react';
import '../../assets/general-banner.jpg'
import "./Banner.css"


export default function Banner(props) {
    return( 
        <div className="banner-general">
            <div className='banner-text'>
                <h1 className='banner-title'>{props.title}</h1>
                <h3 className='banner-subtitle'>{props.subtitle}</h3>
            </div>
        </div>
    )
}