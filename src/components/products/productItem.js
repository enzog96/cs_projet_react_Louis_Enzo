import React from 'react';
import test from "../../assets/fashion-recent-products-06-1.jpg";
import item4 from "../../assets/item-04.jpg";
import item15 from "../../assets/item-15.jpg";
import item16 from "../../assets/item-16.jpg";
import "./productItem.css";
import ProductCard from './productCard';


export const data = [
    {id: 1, name: "pull", price: 75.00, img: test, new: false, sale: true, newprice: 45.00, category: "Kids", inbasket: false, infavorites: false}, 
    {id: 2, name: "t-shirt", price: 75.00, img: item4, new: false, sale: false, newprice: "", category: "Accessories", inbasket: false, infavorites: false},
    {id: 3, name: "pantalon", price: 75.00, img: item15, new: true, sale: false, newprice: "", category: "Accessories", inbasket: false, infavorites: false}, 
    {id: 4, name: "test", price: 75.00, img: item16, new: true, sale: false, newprice: "", category: "Men", inbasket: false, infavorites: false},
    {id: 5, name: "ipsum", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Accessories", inbasket: false, infavorites: false}, 
    {id: 6, name: "lorem", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Women", inbasket: false, infavorites: false},
    {id: 7, name: "dkim", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Kids", inbasket: false, infavorites: false}, 
    {id: 8, name: "lorem ipsum", price: 75.00, img: test, new: false, sale: false, newprice: "", category: "Kids", inbasket: false, infavorites: true},
    {id: 9, name: "lorem ipsum", price: 75.00, img: test, new: true, sale: false, newprice: "", category: "Kids", inbasket: true, infavorites: true},
]

let productsinfavorites = []

for(let i = 0; i < data.length;i++){
    if(data[i].infavorites === true){
    productsinfavorites.push(data[i])
}}


let numberOfSales = 0;

for (let index = 0; index < data.length; index++) {
    if(data[index].sale === true){
        numberOfSales += 1;
    }
}
export let PassNumber = numberOfSales;
export default function ProductItem (props){
    function addtofavorites(){
        data.infavorites = true;      
    }
        return(
            <div>
                    <p className="number-products">Number of products : {data.length}</p>
                <div className="product-gallery">
                    
                {props.filter !== "" ? data.filter(data => data.category === props.filter).map((product) => (
                    <>
                    <ProductCard addtofavorites={addtofavorites} id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category}/>
                    </>
                ))
                :props.searchTerm !== "" ? data.filter(data1 => data1.name.includes(props.searchTerm)).map(product => (
                    <>
                    <ProductCard addtofavorites={addtofavorites} id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category}/>
                    </>
                  ))
                
                :data.map((product) => (
                    <>
                    <ProductCard addtofavorites={addtofavorites} id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category} />
                    </>
                ))}
                </div>
            </div>
        )
}