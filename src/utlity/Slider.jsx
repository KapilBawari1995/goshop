import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import imageData from "../data/image.json"; // Import JSON data

const Slider = () => {
  return (
    <div className="container-fluid py-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {imageData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slider-content d-flex justify-content-center align-items-center">
              <img
                src={item.image}
                className="img-fluid"
                alt={`Banner ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
