import React from 'react';
import test from "../../assets/fashion-recent-products-06-1.jpg";
import item4 from "../../assets/item-04.jpg";
import item15 from "../../assets/item-15.jpg";
import item16 from "../../assets/item-16.jpg";
import "./productItem.css";
import ProductCard from './productCard';


export const data = [
    {id: 1, name: "pull", price: 75.00, img: test, new: false, sale: true, newprice: 45.00, category: "Kids", quantity: 1}, 
    {id: 2, name: "t-shirt", price: 75.00, img: item4, new: false, sale: false, newprice: "", category: "Accessories", quantity: 1},
    {id: 3, name: "pantalon", price: 75.00, img: item15, new: true, sale: false, newprice: "", category: "Accessories", quantity: 1}, 
    {id: 4, name: "test", price: 75.00, img: item16, new: true, sale: false, newprice: "", category: "Men", quantity: 1},
    {id: 5, name: "ipsum", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Accessories", quantity: 1}, 
    {id: 6, name: "lorem", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Women", quantity: 1},
    {id: 7, name: "dkim", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Kids", quantity: 1}, 
    {id: 8, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Kids", quantity: 1},
    {id: 9, name: "lorem ipsum", price: 75.00, img: test, new: true, sale: false, newprice: "", category: "Kids", quantity: 1},
]


let numberOfSales = 0;

for (let index = 0; index < data.length; index++) {
    if(data[index].sale === true){
        numberOfSales += 1;
    }
}
export let PassNumber = numberOfSales;
export default function ProductItem (props){
        return(
            <div>
                    <p className="number-products">Number of products : {data.length}</p>
                <div className="product-gallery">
                    
                {props.filter !== "" ? data.filter(data => data.category === props.filter).map((product) => (
                    <>
                    <ProductCard id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category} quantity={product.quantity}/>
                    </>
                ))
                :props.searchTerm !== "" ? data.filter(data1 => data1.name.includes(props.searchTerm)).map(product => (
                    <>
                    <ProductCard id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category} quantity={product.quantity}/>
                    </>
                  ))
                
                :data.map((product) => (
                    <>
                    <ProductCard id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category} quantity={product.quantity}/>
                    </>
                ))}
                </div>
            </div>
        )
}