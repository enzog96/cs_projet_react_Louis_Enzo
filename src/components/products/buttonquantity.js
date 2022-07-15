import { isFocusable } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'

export default function Buttonquantity(props) {
    let [count, setCount] = useState(1);
    function decrease(){
      if(count > 0)
      setCount(count-=1)
    }

    function increase(){
      setCount(count+=1)
    }
  return (
    <>
    <td><button onClick={()=>decrease()}>-</button><input value={count}></input><button onClick={()=>increase()}>+</button></td>
    <td className="totalprice">{props.product.price*count}$</td>
    </>
  )
}
