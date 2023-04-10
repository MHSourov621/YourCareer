import React from 'react';
import "./Apply.css";
import { Link } from 'react-router-dom';

const Apply = ({ applyJob }) => {
    const { id, CompanyLogo, Job_title, CompanyName, type, time, Salary } = applyJob;
    return (
        <div className='apply-container'>
            <div className='logo-container'>
                <img className='applyJob-logo' src={CompanyLogo} alt="" />
            </div>
            <div className='apply-info'>
                <h3 className='job-title'>{Job_title}</h3>
                <p className='company-name'>{CompanyName}</p>
                <div className='job-type-container'>
                    <p className='job-type'>{type}</p>
                    <p className='job-type'>{time}</p>
                </div>
                <div className='location-container'>
                    <p className='location'><span>Location:</span> Dhaka, Bangladesh</p>
                    <p className='salary'>$ salary: {Salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`}>
                <button className='btn details-btn'>View Details</button>
            </Link>
        </div>
    );
};

export default Apply;