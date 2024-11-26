import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartWithQuantity = savedCart.map((item) => ({
      ...item,
      quantity: 1,
    }));
    setCartItems(cartWithQuantity);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index, change) => {
    const updatedCart = [...cartItems];
    const item = updatedCart[index];
    item.quantity += change;

    if (item.quantity < 1) {
      item.quantity = 1; 
    }

    setCartItems(updatedCart);
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const shipping = 10; 
    return (subtotal + shipping).toFixed(2);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-layout container">
      <div className="cart-table-container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="table table-bordered cart-table">
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="product-info">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cart-item-image"
                      />
                      <span>{item.title}</span>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <div className="quantity-control">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleQuantityChange(index, -1)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleQuantityChange(index, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(item.quantity * item.price).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(index)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="cart-summary-container">
        <div className="apply-coupon">
          <input
            type="text"
            className="form-control"
            placeholder="Coupon Code"
          />
          <button className="btn btn-secondary">Apply Coupon</button>
        </div>
        <div className="cart-summary">
          <h4>Cart Summary</h4>
          <div className="summary-item">
            <span>Subtotal</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <div className="summary-item">
            <span>Shipping</span>
            <span>$10</span>
          </div>
          <div className="summary-item total">
            <span>Total</span>
            <span>${calculateTotal()}</span>
          </div>
          <button
            className="btn btn-primary proceed-btn"
            onClick={handleCheckout}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
