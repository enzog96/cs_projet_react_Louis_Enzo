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
            <div>
                <p>Number of products : {products.length}</p>
            <div className="product-gallery">
            {products.map((product) => (
                <>
                <div>
                <div key={product.id} style={{
                    backgroundImage: "url(" + product.img + ")",backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', 
                    height: "500px", maxWidth: "400px"}}></div>
                <div>
                    <p>{product.name}</p>
                    <p>{product.price}$</p>
                </div>
                </div>
                </>
                ))}
            </div>
            </div>
        )
    }
}