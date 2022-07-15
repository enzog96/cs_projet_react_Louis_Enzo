import React, {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import "./Heart.css"
import ProductRow from '../components/products/productRow';

const Heart = () => {
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
                        <ProductRow increase={increase} decrease={decrease} count={count}/>
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