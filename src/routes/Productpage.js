import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import ProductItem from "../components/products/productItem";
import Footer from "../components/footer/Footer";
import ProductFilters from "../components/products/productfilters.js";



export default function Productpage() {
    const [filter, setFilter] = useState('');
    
    function handlefilter(x){
        setFilter(x)
    }
    return(
    <>
    <div className="product-container">
        <Navbar/>
        <Banner title="Products" subtitle="New Arrivals Women Collection" />
    <div className='product-gallery-container'>
        <ProductFilters filter={filter} handlefilter={handlefilter}/>
        <div className="col-2">
        <ProductItem filter={filter}/></div>
        </div>
    </div>
    <Footer/>
    </>
    )
}


