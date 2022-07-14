import React, {useState} from 'react'
import {PassNumber} from '../products/productItem'
import "./Sold.css"

export default function Sold() {
  return (
    <div className="sold-container">The number of sales is <strong>{PassNumber}</strong></div>
  )
}
