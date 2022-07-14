import React, {useState} from 'react'
import data from "../products/productItem"



export default function Sold(data) {
    // console.log(data[0].sale)
    // const [numberSales, setNumberSales] = useState(0) 
    // for(let i=0; i<data.length; i++){
    //     if(data[i].sale === true){
    //         setNumberSales(numberSales + 1)
    //     }
    // };
    console.log(data[0].sale)
  return (
    <div className="sold-container">The number of sales is </div>
  )
}
