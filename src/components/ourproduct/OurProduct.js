import React, { useState} from "react";
import "./OurProduct.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {AiOutlineHeart} from 'react-icons/ai'
import 'react-tabs/style/react-tabs.css';
import Fashion1 from '../../assets/fashion-recent-products-01-1-1.jpg'
import Fashion2 from '../../assets/fashion-recent-products-01-d.jpg'
import Fashion3 from '../../assets/fashion-recent-products-02-1-1.jpg'
import Fashion4 from '../../assets/fashion-recent-products-04-a-1.jpg'


const OurProduct = () => {

  const [isHovered, setHover] = useState(false);

  

  return (
    <div className='product'  onMouseOver={() => setHover(true)}
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
            <div className='smalltab'>
              <img src={Fashion1} alt="" />
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
              <div className='smalltab-new'>
                NEW
              </div>
               {isHovered && (
                 <button className="btnhover">
                   ADD TO CART 
                 </button>      
               )}
               {isHovered && (
                 <AiOutlineHeart size={35} className='hearthover'/>
               )}
            </div>
            <div className='smalltab'>
              <img src={Fashion2} alt="" />
              <p>Denim jacket blue</p>
              <p>$92.50</p>
              {isHovered && (
                 <button className="btnhover">
                   ADD TO CART 
                 </button>      
               )}
               {isHovered && (
                 <AiOutlineHeart size={35} className='hearthover'/>
               )}
            </div>
            <div className='smalltab'>
              <img src={Fashion3} alt="" />
              <p>Coach slim easton black</p>
              <p>$165.90</p>
              {isHovered && (
                 <button className="btnhover">
                   ADD TO CART 
                 </button>      
               )}
               {isHovered && (
                 <AiOutlineHeart size={35} className='hearthover'/>
               )}
            </div>
            <div className='smalltab'>
              <img src={Fashion4} alt="" />
              <p>Herschel supply co 25l</p>
              <div className="smalltab-p">
                <p style={{textDecoration: 'line-through'}}>$29.50</p>
                <p style={{color: 'red', marginLeft: '1vh'}}>$15.90</p>
                <div className='smalltab-sale'>
                    SALE
                </div>
              </div>
              {isHovered && (
                 <button className="btnhover">
                   ADD TO CART 
                 </button>      
               )}
               {isHovered && (
                 <AiOutlineHeart size={35} className='hearthover'/>
               )}
            </div>
          </div>
        </TabPanel>
        <TabPanel className='tab1'>
        <div className='smalltab'>
              <img src={Fashion1} alt="" />
              <p>Herschel supply co 25l</p>
              <p>$75.00</p>
              <div className='smalltab-new'>
                NEW
              </div>
              {isHovered && (
                 <button className="btnhover">
                   ADD TO CART 
                 </button>      
               )}
               {isHovered && (
                 <AiOutlineHeart size={35} className='hearthover'/>
               )}
            </div>
        </TabPanel>
        <TabPanel>
        <div className='smalltab'>
              <img src={Fashion4} alt="" />
              <p>Herschel supply co 25l</p>
              <div className="smalltab-p">
                <p style={{textDecoration: 'line-through'}}>$29.50</p>
                <p style={{color: 'red', marginLeft: '1vh'}}>$15.90</p>
                <div className='smalltab-sale'>
                    SALE
                </div>
              </div>
              {isHovered && (
                 <button className="btnhover">
                   ADD TO CART 
                 </button>      
               )}
               {isHovered && (
                 <AiOutlineHeart size={35} className='hearthover'/>
               )}
            </div>
        </TabPanel>
        <TabPanel>
        <div className='smalltab'>
              <img src={Fashion2} alt="" />
              <p>Denim jacket blue</p>
              <p>$92.50</p>
              {isHovered && (
                 <button className="btnhover">
                   ADD TO CART 
                 </button>      
               )}
               {isHovered && (
                 <AiOutlineHeart size={35} className='hearthover'/>
               )}
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurProduct;
