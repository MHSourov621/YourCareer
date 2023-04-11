import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import "./Jobs.css"

const Jobs = ({ jobs }) => {
    const [product, setNewProduct] = useState(jobs.slice(0, -2));
    console.log(product);

    const handleSeeAllBtn = () => {
        setNewProduct(jobs)
    }


    return (
        <div>
            <div className='section-title'>
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='jobs-container'>
                {
                    product.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <div className='seeAll-btn-container'>
                <button onClick={handleSeeAllBtn} className='btn seeAll-btn'>Sea all jobs</button>
            </div>
        </div>
    );
};

export default Jobs;