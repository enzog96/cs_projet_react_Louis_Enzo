import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import "./Heart.css"
import { infavoriteslist } from "../components/products/productCard"
<<<<<<< HEAD
import Buttonquantity from '../components/products/buttonquantity';
=======
import { inbasketlist } from '../components/products/productCard';
>>>>>>> enzo

const Heart = () => {
    return (
        <div>
            <Navbar/>
            <Banner title="Favorites" />
                <table className='favorites-table'>
                    <thead>
                    <tr>
                        <th></th>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>TOTAL</th>
                        <th>Add</th>
                    </tr>
                    </thead>
                    <tbody>
                        {infavoriteslist.map((product) => (
                            <tr><td><img src={product.img} alt=""/></td>
                                <td>{product.name}</td>
                                <td>{product.price}$</td>
                                <Buttonquantity product={product}/>
                                <td><button className='button-add-heart'>ADD</button></td>
                            </tr>                           
                        ))}
                    </tbody>
                </table>
                
                <div className='table-big-btn'>
                    <button>PROCEED TO PAYMENT</button>
                </div>
            <Footer/>
        </div>
    );
};

export default Heart;