import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../page/Home";
import Footer from "./Footer";
import CategoryPage from "../page/Categoriespage";
import Header from "../Componet/Header";
import SinglProducati from "../page/SinglProducati";
import CategoriesSlider from "../utlity/CategoriesSlider";
import Products from "../Componet/Products";
import Cart from "../Componet/Cart";


import CheckoutPage from "../page/CheckoutPage";
import PaymentPage from "../page/PaymentPage";
import SuccessPage from "../page/SuccessPage";

const Main = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/s/:category" element={<CategoryPage />} />
        <Route path="/dev" element={<CategoriesSlider />} />
        <Route path="/product/:id" element={<SinglProducati />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default Main;
