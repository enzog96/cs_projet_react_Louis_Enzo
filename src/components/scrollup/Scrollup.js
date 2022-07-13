import React, { useEffect} from 'react';
import {MdDoubleArrow} from 'react-icons/md';
import './Scrollup.css';


export default function Scrollup () {
    const componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
      }
    return (
    <div className="scrollup-element" onClick={componentDidMount}>
        <MdDoubleArrow/>
    </div>)
}