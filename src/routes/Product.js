import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import ProductItem from "../components/products/productItem";
import ProductFilters from "../components/products/productfilters.js";
import ProductCount from '../components/products/ProductCount';



export default function Product() {  
    return( 
    <div className="product-container">
        <Navbar/>
        <Banner title="Products" subtitle="New Arrivals Women Collection" />
    <div className='product-gallery-container'>
        <ProductFilters/>
        <div className="col-2">
        <ProductItem/></div>
        </div>
    </div>
)
}