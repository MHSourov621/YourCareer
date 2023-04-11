import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import "./Jobs.css"

const Jobs = ({ jobs }) => {
    
    return (
        <div>
            <div className='section-title'>
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='jobs-container'>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <button className='btn'>Sea all jobs</button>
        </div>
    );
};

export default Jobs;