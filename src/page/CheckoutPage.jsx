
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <button className="btn btn-primary" onClick={handleCheckout}>Proceed to Payment</button>
    </div>
  );
};

export default CheckoutPage;
