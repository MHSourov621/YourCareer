import React from 'react';
import "./CategoryCard.css";

const CategoryCard = ({data}) => {
    const {name, logo, available_jobs} = data;
    return (
        <div className='category-card-container'>
            <img className='category-logo' src={logo} alt="" />
            <h4>{name}</h4>
            <p>{available_jobs} Jobs Available</p>
        </div>
    );
};

export default CategoryCard;