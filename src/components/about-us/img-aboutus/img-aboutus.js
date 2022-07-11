import React from 'react';
import Img from '../../../assets/item-16_84f06345-b149-4331-9957-2d65c6b87584_700x933.jpg'
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