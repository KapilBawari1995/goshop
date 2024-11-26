import React, { useEffect, useState } from "react";
import axios from "axios";


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesAndCountsWithImages = async () => {
      try {
       
        const categoryResponse = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const categories = categoryResponse.data;

      
        const categoryData = await Promise.all(
          categories.map(async (category) => {
            const productResponse = await axios.get(
              `https://fakestoreapi.com/products/category/${category}`
            );
            const products = productResponse.data;
            return {
              id: category, 
              name: category,
              count: products.length,
              image: products[0]?.image || "https://via.placeholder.com/150", 
            };
          })
        );

        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching categories or product details", error);
      }
    };

    fetchCategoriesAndCountsWithImages();
  }, []);

  return (
    <div className="container py-4">
      <div className="row">
        {categories.map((category) => (
          <div className="col-6 col-md-3 col-lg-3 mb-4" key={category.id}>
       
              <div className="category-card text-center shadow-sm p-3">
                <div className="image-container mx-auto">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="category-image img-fluid rounded"
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                </div>
                <p className="category-name mt-3 font-weight-bold text-dark">
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)}
                </p>
            
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
