import React, {useState} from 'react'

export default function Buttonquantity(props) {
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
    <>
    <td><button onClick={()=>decrease()}>-</button><p>{count}</p><button onClick={()=>increase()}>+</button></td>
</>
  )
}
