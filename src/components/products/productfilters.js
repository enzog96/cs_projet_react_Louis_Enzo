import React from 'react';
import "./productfilters.css"
import {FiSearch} from "react-icons/fi"

export default function ProductFilters(){
    return(
        <div className='productfilters'>
            <h2>Categories</h2>
            <ul>
                <li>All</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Men</li>
                <li>Accessories</li>
            </ul>
            <h2>Filter</h2>
            <div class="form-group fg--search">
            <input type="text" class="input" placeholder="Search products..."></input>
            <button type="submit"><FiSearch/></button>
            </div>
        </div>
    )
}