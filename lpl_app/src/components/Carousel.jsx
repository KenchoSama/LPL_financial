import React, { useState } from "react";
import "./Carousel.css";
import StockCard from "./Cards";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the center card
  const [expandedStock, setExpandedStock] = useState(null); // Track the expanded stock

  const stockData = [
    {
      logo: "https://cdn.pixabay.com/photo/2017/01/06/19/15/apple-1952811_1280.jpg",
      title: "AAPL",
      details: [
        { value: "$150", label: "Price" },
        { value: "+1.5%", label: "Change" },
        { value: "$145", label: "Open Price" },
      ],
      description:
        "Apple Inc. is an American multinational technology company specializing in consumer electronics, software, and online services.",
    },
    {
      logo: "https://cdn.pixabay.com/photo/2021/01/11/11/44/tesla-5905753_1280.jpg",
      title: "TSLA",
      details: [
        { value: "$700", label: "Price" },
        { value: "-2.3%", label: "Change" },
        { value: "Buy", label: "Rating" },
      ],
      description:
        "Tesla, Inc. designs, manufactures, and sells electric vehicles, energy storage products, and solar panels.",
    },
    {
      logo: "https://cdn.pixabay.com/photo/2017/05/30/10/33/amazon-2352952_1280.png",
      title: "AMZN",
      details: [
        { value: "$3200", label: "Price" },
        { value: "+0.8%", label: "Change" },
        { value: "Hold", label: "Rating" },
      ],
      description:
        "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, and AI.",
    },
    {
      logo: "https://cdn.pixabay.com/photo/2014/07/08/11/28/ms-office-386521_1280.jpg",
      title: "MSFT",
      details: [
        { value: "$280", label: "Price" },
        { value: "+0.4%", label: "Change" },
        { value: "Strong Buy", label: "Rating" },
      ],
      description:
        "Microsoft Corporation is a leading technology company focusing on software, hardware, and cloud computing solutions.",
    },
    {
      logo: "https://cdn.pixabay.com/photo/2015/05/26/09/37/google-784222_1280.png",
      title: "GOOGL",
      details: [
        { value: "$2700", label: "Price" },
        { value: "-1.1%", label: "Change" },
        { value: "Hold", label: "Rating" },
      ],
      description:
        "Google LLC is a global technology company specializing in Internet-related services and products, including search and advertising.",
    },
  ];

  // Dynamically calculate the position and transform styles for each card
  const getCardStyle = (index) => {
    const total = stockData.length;
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
        {stockData.map((stock, index) => (
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
              description={stock.description}
              onExpand={() => setExpandedStock(stock)} // Trigger expand modal
            />
          </div>
        ))}
      </div>

      {/* Expanded View (Modal) */}
      {expandedStock && (
        <div
          className="expanded-overlay"
          onClick={() => setExpandedStock(null)} // Close modal on overlay click
        >
          <div
            className="expanded-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <img
              src={expandedStock.logo}
              alt={expandedStock.title}
              className="expanded-image"
            />
            <h2>{expandedStock.title}</h2>
            <p>{expandedStock.description}</p>
            <button
              className="close-button"
              onClick={() => setExpandedStock(null)} // Close modal on button click
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
