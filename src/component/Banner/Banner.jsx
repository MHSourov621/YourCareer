import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-details'>
                <h1 className='banner-title'>One Step Closer To Your <span>Dream Job</span></h1>
                <p className='banner-description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn banner-btn'>Get Started</button>
            </div>
            <div className='banner-img'>
                <img src="banner1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;