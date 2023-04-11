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
    const [show, setShow] = useState(selectedJob);

    const handleOnsite = () => {
        const onsite = selectedJob.filter(sh => sh.type == "Onsite");
        setShow(onsite)
    }
    
    const handleRemote = () => {
        const remote = selectedJob.filter(sh => sh.type == "Remote");
        setShow(remote)
    }

    // console.log(selectedJob); 
    return (
        <div>
            <div className='applied-banner'>
                <h2>Applied Jobs</h2>
            </div>
            <div className='filter-btn-container'>
                <button onClick={handleOnsite} className='btn filter-btn'>Onsite</button>
                <button onClick={handleRemote} className='btn filter-btn'>Remote</button>
            </div>
            <div>
                {
                    show.map(job => <Apply
                        key={job.id}
                        applyJob={job}
                    ></Apply>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;