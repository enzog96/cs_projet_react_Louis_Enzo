import React from 'react';
import "./minimap.css";

const mapURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyALbVaXhUfCrNshLggJurnIsKAp6OUD1xw&q=Molengeek"

export default function Minimap(){
    return(
        <div>
            <iframe className='maps' title="google maps"
                loading="lazy"
                src={mapURL}>
            </iframe>
        </div>
    )
}