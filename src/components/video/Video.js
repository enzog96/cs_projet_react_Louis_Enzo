import React, { useState } from 'react';
import Videob from '../../assets/banner-video.mp4'
import {BsFillPlayFill} from 'react-icons/bs'
import './Video.css'

const Video = () => {
    

    return (
        <div className='video-div'>
                <video autoPlay={true} loop={true} muted={true} className='video' src={Videob}></video>
            <div className='video-text'>
                <h4>The Beauty</h4>
                <h2>LOOKBOOK</h2>
                <div className='video-text2'>
                    <BsFillPlayFill/>
                    <p>PLAY VIDEO</p>
                </div>
            </div>
        </div>
    );
};

export default Video;