import { useState } from "react"
import { AiOutlineHeart } from 'react-icons/ai';

import './productItem.css'

export default function ProductCard(props){
    const [isHovered, setHover] = useState(false);
                return(<div className="product-item-with-text">
                            <div className="product-item-bg-pic" key={props.id} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
                                backgroundImage: "url(" + props.img + ")"
                                }}>
                            
                            {props.sale===true?<div className='sale-red-pill'>Sale</div>: ""}
                            {props.new===true?<div className='new-green-pill'>New</div>: ""}
                                {isHovered && (
                                <button className="btnhover">
                                ADD TO CART 
                                </button>
                                )}
                                {isHovered && (
                                    <AiOutlineHeart size={35} className='hearthover'/>
                                )}  
                            </div>  
                            <div>
                                <p>{props.name}</p>
                                <div className='product-prices-flex-container'>
                                    <p>{props.sale === true?<span className='onsale-price-line-through'>{props.price}$</span> : props.price + "$"}</p>
                                    <p>{props.newprice !== ""?<span className='newprice'>{props.newprice}$</span>: ""}</p>
                                </div>
                            </div>
                        </div>)
}