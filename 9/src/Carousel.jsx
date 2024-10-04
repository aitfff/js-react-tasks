import React, { useState } from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index} 
                        className={cn('carousel-item', { active: index === currentIndex })} 
                    >
                        <img alt="" className="d-block w-100" src={image} />
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                onClick={prevImage}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                onClick={nextImage}
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
// END
