import React from 'react';
import Img from '../../../assets/item-16.jpg'
import "./img-aboutus.css"

export default function Imgaboutus() {
    return( 
        <div>
            <div className='aboutImage'>
                <img src={Img} alt=""></img>
            </div>
        </div>
    )
}