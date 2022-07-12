import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import Table from '../components/table/Table';


const Basket = () => {
    return (
        <div>
            <Navbar/>
            <Banner title="PANIER" />
            <Table/>
            <Footer/>
        </div>
    );
};

export default Basket;