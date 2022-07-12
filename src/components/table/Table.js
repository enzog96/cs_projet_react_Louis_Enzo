import React, { Component } from 'react';
import './Table.css'
import Test from '../../assets/fashion-recent-products-01-1-1.jpg'


class Table extends Component {
    render() {
        return (
            <div className='table'>
                <div className='tab-names'>
                    <p>PRODUCT</p>
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                    <p>TOTAL</p>
                    <p>ADD</p>
                </div>
                <div className='table-div'>
                    <div>
                        <img src={Test} alt="" />
                    </div>
                    <div>
                        <p>dsfsdsfs</p>
                    </div>
                    <div>
                        <p>89</p>
                    </div>
                    <div className='table-btn'>
                        <button>
                            -
                        </button>
                        <input type="text" placeholder='1' />
                        <button>
                            +
                        </button>
                    </div>
                    <div>
                        <p>58</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Table;