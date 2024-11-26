import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ id, image, title, price, category, rating = 4.1 }) => {
  const discountedPrice = (price - price * 0.2).toFixed(2); // Apply 20% discount

  return (
    <Link to={`/product/${id}`} className="col-6 col-md-4 col-lg-3 mb-4 text-decoration-none">
      <div className="card border-0 shadow-sm h-100">
        
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img
            className="img-fluid w-100"
            src={image}
            alt={title || "Product Image"}
            style={{ height: "200px", objectFit: "contain" }}
          />
        </div>

      
        <div className="card-body text-center p-3">
          <h6 className="text-truncate mb-2 text-dark">{title || "Untitled Product"}</h6>
          
       
          <div className="d-flex justify-content-center align-items-center mb-2">
            <span className="badge badge-success px-2 py-1">{rating.toFixed(1)}</span>
            <small className="text-muted ml-2">(18,471)</small>
          </div>

        
          <div className="d-flex justify-content-center align-items-center mb-2">
            <h6 className="text-danger mb-0">₹{discountedPrice}</h6>
            <h6 className="text-muted ml-2 mb-0">
              <del>₹{price.toFixed(2)}</del>
            </h6>
            <span className="ml-2 text-success">20% off</span>
          </div>

        
          <small className="text-success">Free delivery</small>
        </div>

       
        <div className="card-footer bg-light border-top-0 d-flex justify-content-between align-items-center p-2">
          <small className="text-muted">{category}</small>
          <i className="far fa-heart text-secondary" style={{ cursor: "pointer" }}></i>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
