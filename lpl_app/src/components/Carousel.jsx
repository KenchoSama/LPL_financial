import React, { useState } from "react";
import "./Carousel.css";
import StockCard from "./Cards"; // Import the StockCard component

const Carousel = ({ stocks }) => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the center card

  // Calculate position based on the active index
  const calculatePosition = (index) => {
    const offset = index - activeIndex;
    const total = stocks.length;

    if (offset === 0) return "center"; // Center card
    if (offset > 0 || offset < -total / 2) return "right"; // Right side
    return "left"; // Left side
  };

  return (
    <div className="carousel">
      {stocks.map((stock, index) => (
        <div
          key={index}
          className={`carousel-item ${calculatePosition(index)}`}
          onClick={() => setActiveIndex(index)} // Make clicked card the center
        >
          <StockCard
            logo={stock.logo}
            title={stock.title}
            details={stock.details}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
