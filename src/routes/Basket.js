import React, {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import { inbasketlist } from '../components/products/productCard';

const Basket = () => {
    const [count, setCount] = useState(1);

    function increase() {
        if(count < 10){
      setCount(count + 1);}
    }

    function decrease() {
        if(count > 0){
        setCount(count - 1);}
    }
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
                        {inbasketlist.map((product, i) => (
                            <tr><td><img src={product.img} alt=""/></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                
                                <td><button onClick={()=>decrease()}>-</button>{count}<button onClick={()=>increase()}>+</button></td>
                                <td>{product.price * count}$</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            <Footer/>
        </div>
    );
};

export default Basket;