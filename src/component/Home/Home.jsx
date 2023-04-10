import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Jobs from '../Jobs/Jobs';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;  