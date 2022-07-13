import React, { useState} from "react";
import "./OurProduct.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {AiOutlineHeart} from 'react-icons/ai'
import 'react-tabs/style/react-tabs.css';
import Fashion1 from '../../assets/fashion-recent-products-01-1-1.jpg'
import Fashion2 from '../../assets/fashion-recent-products-01-d.jpg'
import Fashion3 from '../../assets/fashion-recent-products-02-1-1.jpg'
import Fashion4 from '../../assets/fashion-recent-products-04-a-1.jpg'
import Product from "../../routes/Product";

import {products} from '../products/productItem';


const OurProduct = () => {

  const [isHovered, setHover] = useState(false);

  

  return (
    <div className='product'  
    onMouseOver={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      <h2>OUR PRODUCTS</h2>
      <Tabs>
        <TabList className='main-tab'>
          <Tab className='popopo'>Best Seller</Tab>
          <Tab className='popopo' >New</Tab>
          <Tab className='popopo' >Sale</Tab>
          <Tab className='popopo' >Old</Tab>
        </TabList>

        <TabPanel>
          <div className='tab1'>
              {products.slice(0, 4).map((product) =>
              <div>
                  <div className="smalltab" key={product.id} style={{
                    backgroundImage: "url(" + product.img + ")",backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    
                  }}>
                    {product.sale===true?<div className='sale-red-pill'>Sale</div>: ""}
                    {product.new===true?<div className='new-green-pill'>New</div>: ""}
                  </div>
                  <div>
                    <p>{product.name}</p>
                    <p>{product.sale === true?<span className='onsale-price-line-through'>{product.price}$</span> : product.price + "$"}</p>
                    <p>{product.newprice !== ""?<span className='newprice'>{product.newprice}$</span>: ""}</p>
                  </div>
                  </div>
              )}            
            </div>
        </TabPanel>
        <TabPanel>
          <div className='tab1'>
              {products.filter(products => products.new === true).map((product) => 
              
              <div>
                  <div className="smalltab" key={product.id} style={{
                    backgroundImage: "url(" + product.img + ")",backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    
                  }}>
                    {product.sale===true?<div className='sale-red-pill'>Sale</div>: ""}
                    {product.new===true?<div className='new-green-pill'>New</div>: ""}
                  </div>
                  <div>
                    <p>{product.name}</p>
                    <p>{product.sale === true?<span className='onsale-price-line-through'>{product.price}$</span> : product.price + "$"}</p>
                    <p>{product.newprice !== ""?<span className='newprice'>{product.newprice}$</span>: ""}</p>
                  </div>
                  </div>
              )}            
            </div>
        </TabPanel>
        <TabPanel>
          <div className='tab1'>
              {products.filter(products => products.sale === true).map((product) =>
              <div>
                  <div className="smalltab" key={product.id} style={{
                    backgroundImage: "url(" + product.img + ")",backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    
                  }}>
                    {product.sale===true?<div className='sale-red-pill'>Sale</div>: ""}
                    {product.new===true?<div className='new-green-pill'>New</div>: ""}
                  </div>
                  <div>
                    <p>{product.name}</p>
                    <p>{product.sale === true?<span className='onsale-price-line-through'>{product.price}$</span> : product.price + "$"}</p>
                    <p>{product.newprice !== ""?<span className='newprice'>{product.newprice}$</span>: ""}</p>
                  </div>
                  </div>
              )}            
            </div>
        </TabPanel>
        <TabPanel>
          <div className='tab1'>
              {products.slice(0, 7).filter(products => products.sale === false ).filter(products => products.new === false).map((product) =>
              <div>
                  <div className="smalltab" key={product.id} style={{
                    backgroundImage: "url(" + product.img + ")",backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    
                  }}>
                    {product.sale===true?<div className='sale-red-pill'>Sale</div>: ""}
                    {product.new===true?<div className='new-green-pill'>New</div>: ""}
                  </div>
                  <div>
                    <p>{product.name}</p>
                    <p>{product.sale === true?<span className='onsale-price-line-through'>{product.price}$</span> : product.price + "$"}</p>
                    <p>{product.newprice !== ""?<span className='newprice'>{product.newprice}$</span>: ""}</p>
                  </div>
                  </div>
              )}            
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurProduct;
