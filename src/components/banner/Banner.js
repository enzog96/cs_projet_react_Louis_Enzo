import React from 'react';
import '../../assets/general-banner.jpg'
import "./Banner.css"


export default function Banner(props) {
    return( 
        <div className="banner-general">
            <h1 className='banner-title'>{props.title}</h1>
        </div>
    )
}