import React, { useState, useEffect } from 'react';
import '../styles/Slider.css'
import slider1 from '../assets/images/SLIDER1.jpg'
import slider2 from '../assets/images/Slider2.jpg'
import slider3 from '../assets/images/Slider3.jpg'
const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    slider1,
    slider2,
    slider3    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="slider">
      <button><img/></button>
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
    </div>
  );
};

export default Slider;
