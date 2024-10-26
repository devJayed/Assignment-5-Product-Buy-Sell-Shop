import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="m-8">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Product Categories
      </h1>
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4 flex flex-col items-center"
          >
            <h2 className="text-xl font-bold text-gray-700 mb-4 capitalize">
              {category.categoryName}
            </h2>
            <p className="text-gray-500 mb-4 text-center px-4">
              Discover our range of {category.categoryName} products.
            </p>
            <Link to={`/menu/${category.categoryName}`}>
              <button className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                View Products
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
