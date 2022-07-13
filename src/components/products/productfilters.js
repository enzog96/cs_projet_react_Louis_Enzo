import React, { useState, setState} from 'react';
import "./productfilters.css"
import {FiSearch} from "react-icons/fi"


export default function ProductFilters({handlefilter}){
    return(
        <div className='productfilters'>
            <h2>Categories</h2>
            <ul>
                <li onClick={()=>handlefilter("")}>All</li>
                <li onClick={()=>handlefilter("Women")} >Women</li>
                <li onClick={()=>handlefilter("Kids")} >Kids</li>
                <li onClick={()=>handlefilter("Men")} >Men</li>
                <li onClick={()=>handlefilter("Accessories")} >Accessories</li>
            </ul>
            <h2>Filter</h2>
            <div className="form-group fg--search">
            <input type="text" className="input" placeholder="Search products..."></input>
            <button type="submit"><FiSearch/></button>
            </div>
        </div>
    )}