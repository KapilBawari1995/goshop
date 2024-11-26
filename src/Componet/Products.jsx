import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCstd from "../utlity/ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [sorting, setSorting] = useState("low-to-high");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  
  const filterByPrice = (products) => {
    if (selectedPriceRange === "all") {
      return products;
    }

    const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
    return products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  };


  const sortByPrice = (products) => {
    return products.sort((a, b) => {
      if (sorting === "low-to-high") {
        return a.price - b.price;
      }
      return b.price - a.price;
    });
  };


  useEffect(() => {
    let updatedProducts = [...products];

  
    updatedProducts = filterByPrice(updatedProducts);

    updatedProducts = sortByPrice(updatedProducts);

    setFilteredProducts(updatedProducts);
  }, [selectedPriceRange, sorting, products]);

  return (
    <div className="container text-center mb-4">
      <h2 className="section-title px-5">
        <span className="px-2">Products</span>
      </h2>

      <div className="d-flex justify-content-between align-items-center mb-4">
 
        <div>
          <label htmlFor="priceFilter" className="me-2">
            Filter by Price:
          </label>
          <select
            id="priceFilter"
            className="form-select d-inline-block w-auto"
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="0-100">$0 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200-300">$200 - $300</option>
            <option value="300-400">$300 - $400</option>
            <option value="400-500">$400 - $500</option>
          </select>
        </div>

      
        <div>
          <label htmlFor="sortOrder" className="me-2">
            Sort by Price:
          </label>
          <select
            id="sortOrder"
            className="form-select d-inline-block w-auto"
            onChange={(e) => setSorting(e.target.value)}
          >
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>

   
      <div className="products-container p-3">
        <div className="row">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="col-6 col-md-4 col-lg-3 mb-3"
            >
              <ProductsCstd product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
