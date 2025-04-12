import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';


import picture1 from '../assets/images/homePageCarousel/sceep1.jpg'
import picture2 from '../assets/images/homePageCarousel/sceep2.jpg'
import picture3 from '../assets/images/homePageCarousel/sceep3.jpg'
import picture4 from '../assets/images/homePageCarousel/sceep4.jpg'
import picture5 from '../assets/images/homePageCarousel/sceep5.jpg'
import picture6 from '../assets/images/homePageCarousel/sceep6.jpg'
import picture7 from '../assets/images/homePageCarousel/sceep7.jpg'


const Home = () => {
  // Settings for the carousel
  const settings = {
    dots: true, // Show dots below the carousel
    infinite: true, // Loop through images
    speed: 500, // Transition speed (ms)
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 4000, // Time between scrolls (4 seconds)
    arrows: true, // Show navigation arrows
    pauseOnHover: true, // Pause autoplay when hovering
  };

  // Placeholder image paths (replace with actual images)
  const images = [
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7,
  ];

  return (
    <div className="home-page">
      {/* The Header is already included in App.js, so we don't need to add it here */}
      <section className="carousel-section">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Home;