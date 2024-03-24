import React, { useState, useEffect } from 'react';
import carousel1 from "../Assets/images/carousel1.png"
import carousel2 from "../Assets/images/carousel2.png"
import sale1 from "../Assets/images/sale1.png"
import sale2 from "../Assets/images/sale2.png"
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    carousel1,
    carousel2
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className='grid grid-cols-2 grid-rows-1 md:gap-16 ml-10 gap-6 mt-24 md:mt-36'>
      <div className="carousel mt-10 md:ml-20">
        {images.map((image, index) => (
          <img
            className='rounded-xl'
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ display: index === currentIndex ? 'block' : 'none', width: "90%" }}
          />
        ))}
      </div>
      <div className='mt-11 md:ml-10 flex flex-col gap-5'>
        <img src={sale2} alt="" style={{ width: "70%" }} className='rounded-xl' />
        <img src={sale1} alt="" style={{ width: "70%" }} className='rounded-xl' />
      </div>
    </div>
  );
};

export default Carousel;
