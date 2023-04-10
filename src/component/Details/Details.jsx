import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./Details.css";
import { addToDb } from '../../utilities/fakedb';

const Details = () => {
    const jobs = useLoaderData();
    let { id } = useParams();

    const job = jobs.find(job => job.id == id);
    // console.log(job);
    const { Job_title, Salary, Location, Description, Responsibility, Education, Experiences, phone, email }
        = job;

    const handleAddTODb = id => {
        addToDb(id)
    }

    return (
        <div className='details-container'>
            <div className='details-info'>
                <p><span>Job Description:</span> {Description}</p>
                <p><span>Job Responsibility:</span> {Responsibility}</p>
                <p><span>Educational Requirements:</span></p>
                <p>{Education}</p>
                <p><span>Experiences:</span></p>
                <p>{Experiences}</p>
            </div>
            <div>
                <div className='details-contact'>
                    <h3>Job Details</h3>
                    <p><span>Salary: </span>{Salary} Per Month</p>
                    <p><span>Job Title: </span> {Job_title}</p>

                    <h3>Contact Information</h3>
                    <p><span>Phone: </span>{phone}</p>
                    <p><span>Email: </span>{email}</p>
                    <p><span>Address: </span>{Location}</p>
                </div>
                <button onClick={() => handleAddTODb(job.id)} className='btn apply-btn'>Apply Now</button>
            </div>

        </div>
    );
};

export default Details;