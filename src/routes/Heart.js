import React, {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import Test from '../assets/fashion-recent-products-01-1-1.jpg'
import "./Heart.css"

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
                    <th></th>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                    <th>Add</th>
                <tr><td>
                    <div className='img-table'><img src={Test} alt="" /></div>
                    </td>
                    <td>hello</td>
                    <td>59$</td>
                    <td><button onClick={()=>decrease()}> - </button>
                        <input type="text" value={count} />
                        <button onClick={()=>increase()}> + </button></td>
                    <td>59$</td>
                    <td><button>add</button></td>
                    </tr>
                </table>
                
                <div className='table-big-btn'>
                    <button>PROCEED TO PAYMENT</button>
                </div>
            <Footer/>
        </div>
    );
};

export default Heart;