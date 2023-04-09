import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-section'>
            <h2 className='logo-name'>YourCareer</h2>
            <div className='link-div'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/jobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <button className='btn header-btn'>Start Applying</button>
        </div>
    );
};

export default Header;