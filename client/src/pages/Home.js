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
import picture8 from '../assets/images/homePageCarousel/sceep8.jpg'
import picture9 from '../assets/images/homePageCarousel/sceep9.jpg'
import picture10 from '../assets/images/homePageCarousel/sceep10.jpg'
import picture11 from '../assets/images/homePageCarousel/sceep11.jpg'
import picture12 from '../assets/images/homePageCarousel/sceep12.jpg'


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
    picture8,
    picture9,
    picture10,
    picture11,
    picture12,
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
      
      <section className='story-section'>
        <h2>The Story of Silver Creek Equestrian Program</h2>
          <p>
          Silver Creek Equestrian Education Program (SCEEP) was founded in 2011 by Laurie Brimhall 
          in Snowflake, Arizona, with a mission to bring the joy of horsemanship to children and families 
          in the community. Laurie always dreamed of creating a space where kids could learn to ride, 
          care for horses, and build confidence through hands-on experiences. What started as a small 
          summer horse camp has developed into a thriving equestrian education program, offering several 
          activities such as homeschool classes, riding lessons, summer camps, and Day at the Farm with 
          Horses. Today, SCEEP continues to foster a love for horses while teaching valuable life skills 
          such as responsibility, teamwork, and perseverance.          </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Silver Creek Equestrian Education Program aims to cultivate confident, compassionate, and knowledgeable horsemen and horsewomen through hands-on learning, comprehensive horsemanship education, and a joyful connection with horses. We are dedicated to providing a safe, inclusive, and engaging environment where students of all ages can grow, not only as riders but as stewards of equine care and lifelong learners in the world of horsemanship.
        </p>
      </section>
      
    </div>
  );
};


export default Home;