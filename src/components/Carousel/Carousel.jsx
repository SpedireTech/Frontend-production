import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimony from "../../assets/testimony1.png";
import testimony2 from "../../assets/testimony2.png";
import testimony3 from "../../assets/testimony3.png";

const testimonyImage = [
  { id: 1, image: `${testimony}` },
  { id: 2, image: `${testimony2}` },
  { id: 3, image: `${testimony3}` },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Carousel = () => {
  return (
    <div className="max-w-full mt-36 px-7">
      <Slider {...settings}>
        {testimonyImage.map((img, index) => (
          <div
            key={index}
            className="w-full h-screen flex items-center justify-center"
          >
            <img src={img.image} alt="testimony" className="w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
