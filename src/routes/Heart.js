import React, {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import "./Heart.css"
import { infavoriteslist } from "../components/products/productCard"

const Heart = () => {
    // const [count, setCount] = useState(1);

    // function increase() {
    //     if(count < 10){
    //   setCount(count + 1);}
    // }

    // function decrease() {
    //     if(count > 0){
    //     setCount(count - 1);}
    // }
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
                                <td>{product.price}</td>
                                <td><button >-</button>{product.quantity}<button>+</button></td>
                                <td>{product.price * product.quantity}$</td>
                                <td><button>ADD</button></td>
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