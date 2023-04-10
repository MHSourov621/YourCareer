import React from 'react';
import "./Job.css"
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {id, CompanyLogo, Job_title, CompanyName, type, time, Salary} = job;
    return (
        <div className='job-card'>
            <img className='company-logo' src={CompanyLogo} alt="" />
            <h3 className='job-title'>{Job_title}</h3>
            <p className='company-name'>{CompanyName}</p>
            <div className='job-type-container'>
                <p className='job-type'>{type}</p>
                <p className='job-type'>{time}</p>
            </div>
            <div className='location-container'>
                <p className='location'>Location: Dhaka, Bangladesh</p>
                <p className='salary'>$ salary: {Salary}</p>
            </div>
            <Link to={`/job/${id}`}>
            <button className='btn details-btn'>View Details</button>
            </Link>
        </div>
    );
};

export default Job;