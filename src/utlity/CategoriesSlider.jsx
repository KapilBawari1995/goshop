import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const categories = ["jewelery", "men's clothing", "women's clothing", "electronics"];
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const data = {};
        for (const category of categories) {
          const response = await axios.get(
            `https://fakestoreapi.com/products/category/${category}`
          );
          data[category] = response.data;
        }
        setCategoryData(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchCategoryData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
      
        {categories.map((category, index) => (
          <div key={index} className="col-md-6 mt-5">
            <div className="category-slider">
           
              <h5 className="text-center mb-3">{category.toUpperCase()}</h5>
            
              {categoryData[category] ? (
                <Link
                  className="nav-item nav-link text-decoration-none"
                  to={`/s/${category}`}
                >
                  <Swiper
                    modules={[Navigation]}
                    navigation
                    loop={false} // No loop
                    slidesPerView={2} // Two slides visible at a time
                    spaceBetween={20}
                    className="mySwiper"
                  >
                    {categoryData[category].map((product) => (
                      <SwiperSlide key={product.id}>
                        <div className="slider-content d-flex flex-column align-items-center">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="img-fluid"
                            style={{ maxHeight: "200px", objectFit: "contain" }}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Link>
              ) : (
                <p>Loading {category} products...</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
