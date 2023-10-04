import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch categories
    axios.get('http://localhost:3000/api/categories') 
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="category-list">
      {categories.map((category) => (
        <div key={category._id} className="category-item">
          <img src={category.images} alt={category.name} />
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
