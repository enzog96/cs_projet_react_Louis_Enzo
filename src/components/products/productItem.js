import React from 'react';
import test from "../../assets/fashion-recent-products-06-1.jpg";
import "./productItem.css";


const products = [
    {id: 1, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: true, newprice: 45.00}, 
    {id: 2, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: ""},
    {id: 3, name: "lorem ipsum", price: 75.00, img: test, new: true, sale: false, newprice: ""}, 
    {id: 4, name: "lorem ipsum", price: 75.00, img: test, new: true, sale: false, newprice: ""},
    {id: 5, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: ""}, 
    {id: 6, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: ""},
    {id: 7, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: ""}, 
    {id: 8, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: ""},
    {id: 9, name: "lorem ipsum", price: 75.00, img: test, new: true, sale: false, newprice: ""},
]

export default class ProductItem extends React.Component {

    render() {
        return(
            <div>
                <p className="number-products">Number of products : {products.length}</p>
            <div className="product-gallery">
            {products.map((product) => (
                <>
                <div>
                <div key={product.id} style={{
                    backgroundImage: "url(" + product.img + ")",backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', 
                    height: "500px", maxWidth: "400px"}}>
                        {product.sale===true?<div className='sale-red-pill'>Sale</div>: ""}
                        {product.new===true?<div className='new-green-pill'>New</div>: ""}
                    </div>
                    
                <div>
                    <p>{product.name}</p>
                    <div className='product-prices-flex-container'>
                        <p>{product.sale === true?<div className='onsale-price-line-through'>{product.price}$</div> : product.price + "$"}</p>
                        <p>{product.newprice !== ""?<div className='newprice'>{product.newprice}$</div>: ""}</p>
                    </div>
                </div>
                </div>
                </>
                ))}
            </div>
            </div>
        )
    }
}