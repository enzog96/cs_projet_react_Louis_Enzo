import React, {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import { inbasketlist } from '../components/products/productCard';
import Buttonquantity from '../components/products/buttonquantity';

const Basket = () => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <Navbar/>
            <Banner title="Shopping cart" />
            <table className='favorites-table'>
                    <thead>
                    <tr>
                        <th></th>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>TOTAL</th>
                    </tr>
                    </thead>
                    <tbody>
                        {inbasketlist.map((product) => (
                            <tr><td><img src={product.img} alt=""/></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><Buttonquantity props={product} count={count}/></td>
                                <td>total = {product.price * count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            <Footer/>
        </div>
    );
};

export default Basket;