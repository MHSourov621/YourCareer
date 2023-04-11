import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';

const Main = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Jobs jobs={jobs}></Jobs>
        </div>
    );
};

export default Main;