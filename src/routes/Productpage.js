import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import ProductItem from "../components/products/productItem";
import Footer from "../components/footer/Footer";
import ProductFilters from "../components/products/productfilters.js";
import Sold from "../components/sold/Sold"

import '../components/products/productItem.css'

export default function Productpage() {
    const [filter, setFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    
    function handlefilter(x){
        setFilter(x)
    }

    return(
    <>
    <div className="product-container">
        <Sold/>
        <Navbar/>
        <Banner title="Products" subtitle="New Arrivals Women Collection" />
    <div className='product-gallery-container'>
        <ProductFilters filter={filter} handlefilter={handlefilter} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className="col-2">
        <ProductItem filter={filter} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/></div>
        </div>
    </div>
    <Footer/>
    </>
    )
}


