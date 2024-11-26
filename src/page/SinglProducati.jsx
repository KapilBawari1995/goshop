import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SinglProducati = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError("Error fetching product data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>;
  if (error) return <p className="text-danger">{error}</p>;

  const discountedPrice = (product.price - product.price * 0.2).toFixed(2);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Product added to cart!");
    navigate("/cart"); 
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div id="productCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={product.image} alt="Product" className="d-block w-100 img-fluid rounded shadow" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <h1 className="font-weight-bold mb-3">{product.title}</h1>
          <p className="text-muted">{product.description}</p>
          <div className="d-flex align-items-center mb-3">
            <p className="text-primary display-4 mb-0">₹{discountedPrice}</p>
            <span className="ml-3 text-muted text-decoration-line-through">₹{product.price}</span>
            <span className="ml-2 text-success">20% off</span>
          </div>
          <div className="mb-4">
            <h5>Filters</h5>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Rating:</strong> {product.rating.rate} <span className="text-warning">&#9733;</span></p>
          </div>
          <button className="btn btn-lg btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SinglProducati;
