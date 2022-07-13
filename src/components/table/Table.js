import React,{useState} from 'react';
import './Table.css'
import Test from '../../assets/fashion-recent-products-01-1-1.jpg'


function Table() {
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
            <div className='table'>
                <div className='tab-names'>
                    <p className='tab-names1'>PRODUCT</p>
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                    <p>TOTAL</p>
                </div>
                <div className='table-div'>
                    <div className='table-img'>
                        <img src={Test} alt="" />
                        <p>dsfsdsfs</p>
                    </div>
                    <div> <p>$89.00</p> </div>
                    <div className='table-btn'>
                        <button onClick={()=>decrease()}> - </button>
                        <input type="text" value={count} />
                        <button onClick={()=>increase()}> + </button>
                    </div>
                    <div> <p>$58,00</p> </div>
                </div>
                <div className='table-big-btn'>
                    <button>PROCEED TO PAYMENT</button>
                </div>
                
            </div>
        );
}

export default Table;