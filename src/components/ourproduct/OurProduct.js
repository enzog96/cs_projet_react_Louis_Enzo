import React from "react";
import "./OurProduct.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Fashion1 from '../../assets/fashion-recent-products-01-1-1.jpg'

const OurProduct = () => {
  return (
    <div className='product'>
      <h2>OUR PRODUCTS</h2>
      <Tabs>
        <TabList className='main-tab'>
          <Tab>Best Seller</Tab>
          <Tab>New</Tab>
          <Tab>Sale</Tab>
          <Tab>Old</Tab>
        </TabList>

        <TabPanel>
          <div className='tab1'>
            <div className='smalltab'>
              <img src={Fashion1} alt="" />
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
            </div>
            <div className='smalltab'>
              <img src={Fashion1} alt="" />
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
            </div>
            <div className='smalltab'>
              <img src={Fashion1} alt="" />
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
            </div>
            <div className='smalltab'>
              <img src={Fashion1} alt="" />
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className='smalltab'>
              <img src={Fashion1} alt="" />
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
            </div>
        </TabPanel>
        <TabPanel>
        <div className='smalltab'>
              <img src={Fashion1} alt="" />
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
            </div>
        </TabPanel>
        <TabPanel>
        <div className='smalltab'>
              <img src={Fashion1} alt="" />
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurProduct;
