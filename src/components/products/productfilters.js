import React, { useState, setState} from 'react';
import "./productfilters.css"
import {FiSearch} from "react-icons/fi"


export default function ProductFilters(){
    let [filter, setFilter] = useState('All')
    function updateFilter(filterc){
        setFilter(filterc)   
    }
    
    return(
        <div className='productfilters'>
            <h2>Categories</h2>
            <h3>Current filter : {filter}</h3>
            <ul>
                <li value="All" onClick={()=>updateFilter('All')}>All</li>
                <li value="Women" onClick={()=>updateFilter('Women')}>Women</li>
                <li value="Kids" onClick={()=>updateFilter('Kids')}>Kids</li>
                <li value="Men" onClick={()=>updateFilter('Men')}>Men</li>
                <li value="Accessories" onClick={()=>updateFilter('Accessories')}>Accessories</li>
            </ul>
            <h2>Filter</h2>
            <div className="form-group fg--search">
            <input type="text" className="input" placeholder="Search products..."></input>
            <button type="submit"><FiSearch/></button>
            </div>
        </div>
    )
}