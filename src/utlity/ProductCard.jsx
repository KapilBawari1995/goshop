import React from "react";

const ProductsCstd = ({ product }) => {

  

  return (
    <div className="card h-100">
      <img
        className="card-img-top"
        src={product.image}  
        alt={product.category}
        style={{ height: "300px", objectFit:"contain", padding : "5px"}}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{product.category}</h5>
        <p className="card-text text-primary">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductsCstd;
