import React from 'react'
import {data} from "./productItem"

export default function ProductRow(props) {
  return (
    <>
    {data.filter(data => data.infavorites === true).map((product=>
    <tr key={product.id}>
        <td><div className='img-table'><img src={product.img} alt=""></img></div></td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><button onClick={()=>props.decrease()}> - </button>
        <input type="text" value={props.count} />
        <button onClick={()=>props.increase()}> + </button></td>
        <td>{product.price * props.count}</td>
        <td><button>add</button></td>
        </tr>
        ))}
    </>
  )
}
