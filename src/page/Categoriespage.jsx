import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CategoryCard from "../utlity/CategoryCard";

const CategoriesPage = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
                setProducts(response.data);
            } catch (err) {
                setError("Failed to fetch products. Please try again later.");
            }
        };
        if (category) {
            fetchProducts();
        }
    }, [category]);

    const formattedCategory = category
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <div className="container-fluid pt-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5">
                    <span className="px-2">{formattedCategory} Collection</span>
                </h2>
            </div>

            {error ? (
                <div className="alert alert-danger text-center">{error}</div>
            ) : products.length === 0 ? (
                <div className="alert alert-info text-center">No products available in this category.</div>
            ) : (
                <div className="row px-xl-5 pb-3">
                    {products.map((product) => (
                        <CategoryCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            rating={product.rating?.rate || 4.1} // Example for handling ratings
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoriesPage;
