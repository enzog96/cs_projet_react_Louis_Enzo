import React, { useState} from 'react';
import test from "../../assets/fashion-recent-products-06-1.jpg";
import item4 from "../../assets/item-04.jpg";
import item15 from "../../assets/item-15.jpg";
import item16 from "../../assets/item-16.jpg";
import "./productItem.css";
import ProductCard from './productCard';
import Search from 'antd/lib/transfer/search';


export const data = [
    {id: 1, name: "pull", price: 75.00, img: test, new: false, sale: true, newprice: 45.00, category: "Kids", inbasket: false}, 
    {id: 2, name: "t-shirt", price: 75.00, img: item4, new: false, sale: false, newprice: "", category: "Accessories", inbasket: false},
    {id: 3, name: "pantalon", price: 75.00, img: item15, new: true, sale: false, newprice: "", category: "Accessories", inbasket: false}, 
    {id: 4, name: "lorem ipsum", price: 75.00, img: item16, new: true, sale: false, newprice: "", category: "Men", inbasket: false},
    {id: 5, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Accessories", inbasket: false}, 
    {id: 6, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Women", inbasket: false},
    {id: 7, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Kids", inbasket: false}, 
    {id: 8, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Kids", inbasket: false},
    {id: 9, name: "lorem ipsum", price: 75.00, img: test, new: true, sale: false, newprice: "", category: "Kids", inbasket: false},
]

export default function ProductItem (props){
            
        return(
            <div>
                {console.log(props.searchTerm)}
                    <p className="number-products">Number of products : {data.length}</p>
                <div className="product-gallery">
                    
                {props.filter !== "" ? data.filter(data => data.category === props.filter).map((product) => (
                    <>
                    <ProductCard id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category}/>
                    </>
                )):props.searchTerm !== "" ? data.filter(data1 => data1.name.includes(props.searchTerm)).map(product => (
                    <>
                    <ProductCard id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category}/>
                    </>
                  ))
                
                :data.map((product) => (
                    <>
                    <ProductCard id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category}/>
                    </>
                ))}
                </div>
            </div>
        )
}