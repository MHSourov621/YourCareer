import React, { useEffect, useState } from 'react';
import "./AppliedJob.css";
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import Apply from '../Apply/Apply';

const AppliedJob = () => {
    const jobs = useLoaderData();
    let selectedJob = [];
    const appliedJob = getShoppingCart();
    for(const id in appliedJob){
        const foundJobs = jobs.find(job => job.id == id);
        if(foundJobs){
            selectedJob.push(foundJobs);
        }
    }

    // console.log(selectedJob);
    return (
        <div>
            <div className='applied-banner'>
                <h2>Applied Jobs</h2>
            </div>
            <div>
                {
                    selectedJob.map(job => <Apply
                        key={job.id}
                        applyJob={job}
                    ></Apply>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;