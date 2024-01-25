import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       
    autoplaySpeed: 2000,  
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="/Bannerimage1.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="/Bannerimage2.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="/Bannerimage3.png"
          alt=""
        />
      </div>
    </Slider>
  );
}

export default HeroSection;
