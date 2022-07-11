import React from 'react';
import './ComingSoon.css'
import Coming1 from '../../assets/coming1.png'
import Coming2 from '../../assets/coming2.png'
import Coming3 from '../../assets/coming3.png'


const ComingSoon = () => {
    return (
        <div className="comingsoon">
            <div  className='coming'>
                <img className='coming-img' src={Coming1} alt="" />
                <div className='coming-text'>
                    <button>COMING SOON</button>
                </div>
            </div>
            <div className='coming'>
                <img className='coming-img' src={Coming2} alt="" />
                <div className='coming-text'>
                    <button>COMING SOON</button>
                </div>
            </div>
            <div className='coming'>
                <img className='coming-img' src={Coming3} alt="" />
                <div className='coming-text'>
                    <button>COMING SOON</button>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;