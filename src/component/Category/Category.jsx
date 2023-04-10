import React, { useEffect, useState } from 'react';
import "./Category.css"
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <div className='section-title'>
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='card-container'>
                {
                    category.map(cate => <CategoryCard
                        key={cate.id}
                        data={cate}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;