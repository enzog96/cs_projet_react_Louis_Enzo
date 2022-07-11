import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import ProductItem from "../components/products/productItem";



export default function Product() {  
    return( 
    <div className="product-container">
        <Navbar/>
        <Banner title="Products" subtitle="New Arrivals Women Collection" />
        <ProductItem/>
    </div>
)
}