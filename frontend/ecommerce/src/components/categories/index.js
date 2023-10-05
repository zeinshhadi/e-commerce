import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch categories
    axios.get('http://localhost:4000/api/categories') 
      .then((response) => {
        setCategories(response.data);
        console.log(categories);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, [categories]);

  return (
    <div className="category-list row">
        <div className='col-4'>
      {categories.map((category) => (
        <div key={category._id} className="category-item">
          <Link to={`products?category=${category.name}`}>
          <img src={category.images} alt={category.name} />
          <span>{category.name}</span></Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Categories;
