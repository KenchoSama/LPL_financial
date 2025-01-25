import React, { useState } from "react";
import "./Carousel.css";
import StockCard from "./Cards"; // Import the StockCard component

const Carousel = ({ stocks }) => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the center card

  // Calculate the position and transform style for each card
  const getCardStyle = (index) => {
    const total = stocks.length;
    const angle = (index - activeIndex) * (360 / total); // Calculate rotation angle
    const translateZ = 300; // Distance from the center
    const rotateY = angle;

    return {
      transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
    };
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {stocks.map((stock, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            style={getCardStyle(index)}
            onClick={() => setActiveIndex(index)} // Bring clicked card to the center
          >
            <StockCard
              logo={stock.logo}
              title={stock.title}
              details={stock.details}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
