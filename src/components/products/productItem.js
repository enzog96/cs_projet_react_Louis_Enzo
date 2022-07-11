import React from 'react';
import test from "../../assets/fashion-recent-products-06-1.jpg";
import "./productItem.css";


const products = [
    {id: 1, name: "lorem ipsum", price: 75, img: test}, 
    {id: 2, name: "lorem ipsum", price: 75, img: test},
    {id: 3, name: "lorem ipsum", price: 75, img: test}, 
    {id: 4, name: "lorem ipsum", price: 75, img: test},
    {id: 5, name: "lorem ipsum", price: 75, img: test}, 
    {id: 6, name: "lorem ipsum", price: 75, img: test},
    {id: 7, name: "lorem ipsum", price: 75, img: test}, 
    {id: 8, name: "lorem ipsum", price: 75, img: test},
    {id: 9, name: "lorem ipsum", price: 75, img: test}, 
]

export default class ProductItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="product-gallery">
            {products.map((product) => (
                <div key={product.id}>
                <img className="image-product" src={product.img} alt={product.name}></img>
                <p>{product.name}</p>
                </div>
                ))}
            </div>
        )
    }
}