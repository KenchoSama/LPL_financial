import React, { useState } from "react";
import "./Carousel.css";
import StockCard from "./Cards";
import StockDataFetcher from "./StockDataFetcher";

const Carousel = () => {
  const [stockData, setStockData] = useState([]); // Store all fetched stock data
  const [activeIndex, setActiveIndex] = useState(0); // Track the center card
  const [expandedStock, setExpandedStock] = useState(null); // Track the expanded stock

  // Stock symbols for the API
  const symbols = ["AAPL", "TSLA", "AMZN", "MSFT", "GOOGL"];

  // Handle data fetched from the API
  const handleDataFetched = (data) => {
    const updatedStockData = data.map((stock) => {
      const price = parseFloat(stock.details.find((d) => d.label === "Price")?.value || "0");
      const openPrice = parseFloat(stock.details.find((d) => d.label === "Open")?.value || "0");
      const percentageChange =
        price && openPrice
          ? (((price - openPrice) / openPrice) * 100).toFixed(2)
          : "N/A";

      return {
        logo: getStockLogo(stock.symbol), // Map symbol to logo
        title: stock.title,
        details: [
          { label: "Price", value: `$${price}` },
          { label: "Open Price", value: `$${openPrice}` },
          { label: "Change", value: `${percentageChange}%` },
        ],
        description: getStockDescription(stock.symbol), // Map symbol to description
      };
    });

    setStockData(updatedStockData);
  };

  // Map stock symbol to logo URL
  const getStockLogo = (symbol) => {
    const logos = {
      AAPL: "/apple.png",
      TSLA: "/tesla.jpg",
      AMZN: "/amazon.png",
      MSFT: "/MSFT.png",
      GOOGL: "/google.jpg",
    };

    return logos[symbol];
  };

  // Map stock symbol to description
  const getStockDescription = (symbol) => {
    const descriptions = {
      AAPL: "Apple Inc. specializes in consumer electronics, software, and online services.",
      TSLA: "Tesla, Inc. designs and manufactures electric vehicles and energy products.",
      AMZN: "Amazon.com focuses on e-commerce, cloud computing, and AI.",
      MSFT: "Microsoft Corporation develops software, hardware, and cloud computing solutions.",
      GOOGL: "Google LLC provides Internet-related services and products, including search and advertising.",
    };

    return descriptions[symbol];
  };

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
      {/* Fetch stock data */}
      <StockDataFetcher symbols={symbols} onDataFetched={handleDataFetched} />

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
