import React, { Component } from 'react';
import './Table.css'
import Test from '../../assets/fashion-recent-products-01-1-1.jpg'


class Table extends Component {
    render() {
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
                        <button> - </button>
                        <input type="text" placeholder='1' />
                        <button> + </button>
                    </div>
                    <div> <p>$58,00</p> </div>
                </div>
                <div className='table-big-btn'>
                    <button>PROCEED TO PAYMENT</button>
                </div>
                
            </div>
        );
    }
}

export default Table;