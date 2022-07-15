import React, { useState} from "react";
import "./OurProduct.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {data} from '../products/productItem';
import ProductCard from "../products/productCard";


const OurProduct = () => {
  return (
    <div className='product'>
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
              {data.slice(0, 4).map((product) =>
              <div key={product.id}>
                  <ProductCard id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category}/>
              </div>)}       
          </div> 
        </TabPanel>
        <TabPanel>
          <div className='tab1'>
              {data.filter(data => data.new === true).map((product) => 
              <div key={product.id}>
              <ProductCard id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category}/>
          </div>
              )}            
            </div>
        </TabPanel>
        <TabPanel>
          <div className='tab1'>
              {data.filter(data => data.sale === true).map((product) =>
              <div key={product.id}>
                <ProductCard id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category}/>
              </div>
              )}            
          </div>
        </TabPanel>
        <TabPanel>
          <div className='tab1'>
              {data.slice(0, 7).filter(data => data.sale === false ).filter(data => data.new === false).map((product) =>
              <div key={product.id}>
              <ProductCard id={product.id} name={product.name} price={product.price} img={product.img} new={product.new} sale={product.sale} newprice={product.newprice} category={product.category}/>
              </div>
              )}            
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurProduct;
