import { useState } from "react"
import { AiOutlineHeart } from 'react-icons/ai';

export let infavoriteslist = [];
export let inbasketlist = [];

export default function ProductCard(props){
    const [isHovered, setHover] = useState(false);
    function handlepush(x){
       if(inbasketlist.includes(x)){
        console.log("already in basket")
       }else{
        console.log("pushed in basket")
        inbasketlist.push(x)
            }
        }
    function handlepushfav(y){
        if(infavoriteslist.includes(y)){
            console.log("already in fav")
        }else{
            console.log("pushed in fav")
            infavoriteslist.push(y)
        }
        setIsActive(true);
        }
    const [isActive, setIsActive] = useState(false);

            return(<div className="product-item-with-text">
                            <div className="product-item-bg-pic" key={props.id} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
                                backgroundImage: "url(" + props.img + ")"
                                }}>
                            
                            {props.sale===true?<div className='sale-red-pill'>Sale</div>: ""}
                            {props.new===true?<div className='new-green-pill'>New</div>: ""}
                                {isHovered && (
                                <button className="btnhover" onClick={()=>handlepush(props)}>
                                ADD TO CART 
                                </button>
                                )}
                                {isHovered && (
                                    <AiOutlineHeart onClick={()=>handlepushfav(props)} size={35} style={{color: isActive ? "red" : " "}} className='hearthover'/>
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