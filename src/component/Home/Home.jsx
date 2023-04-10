import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Category></Category>
            <Jobs jobs={jobs}></Jobs>
            
        </div>
    );
};

export default Home;  