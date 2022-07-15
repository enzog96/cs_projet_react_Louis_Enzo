import React, {useState} from 'react'

export default function Buttonquantity(props) {
    let [count, setCount] = useState(1);

  return (
    <>
    <td><button onClick={()=>setCount(count-=1)}>-</button><input value={count}></input><button onClick={()=>setCount(count+=1)}>+</button></td>
    <td>{props.product.price*count}$</td>
    </>
  )
}
