import React from 'react';
import "./productfilters.css"

export default function ProductFilters(){
    return(
        <div>
            <h2>Categories</h2>
            <ul>
                <li>All</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Men</li>
                <li>Accessories</li>
            </ul>
            <h2>Filter</h2>
            <input placeholder="Search Products..." type="text"></input>
        </div>
    )
}