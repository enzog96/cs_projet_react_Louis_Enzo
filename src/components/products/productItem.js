import React, { useState} from 'react';
import test from "../../assets/fashion-recent-products-06-1.jpg";
import item4 from "../../assets/item-04.jpg";
import item15 from "../../assets/item-15.jpg";
import item16 from "../../assets/item-16.jpg";
import "./productItem.css";
import ProductCard from './productCard';


export const data = [
    {id: 1, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: true, newprice: 45.00, category: "Kids"}, 
    {id: 2, name: "lorem ipsum", price: 75.00, img: item4, new: false, sale: false, newprice: "", category: "Accessories"},
    {id: 3, name: "lorem ipsum", price: 75.00, img: item15, new: true, sale: false, newprice: "", category: "Accessories"}, 
    {id: 4, name: "lorem ipsum", price: 75.00, img: item16, new: true, sale: false, newprice: "", category: "Men"},
    {id: 5, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Accessories"}, 
    {id: 6, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Women"},
    {id: 7, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Kids"}, 
    {id: 8, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Kids"},
    {id: 9, name: "lorem ipsum", price: 75.00, img: test, new: true, sale: false, newprice: "", category: "Kids"},
]

export default function ProductItem (props){
        const [filter, setFilter] = useState(props.filter)
        return(
            <div>
                <p className="number-products">Number of products : {data.length}</p>
                <div className="product-gallery">
                {props.filter !== "" ? data.filter(data => data.category === props.filter).map((product) => (
                    <>
                    <ProductCard id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category}/>
                    </>
                )):data.map((product) => (
                    <>
                    <ProductCard id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category}/>
                    </>
                ))}
                </div>
            </div>
        )
}