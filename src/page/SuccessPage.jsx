// SuccessPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate('/');
  };

  return (
    <div className="container my-5">
      <h2>Payment Successful!</h2>
      <p>Your payment has been processed successfully. Thank you for your purchase!</p>
      <button className="btn btn-primary" onClick={handleRedirectToHome}>Go to Home</button>
    </div>
  );
};

export default SuccessPage;
