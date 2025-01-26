import React, { useState, useCallback, useMemo } from "react";
import "./Carousel.css";
import StockCard from "./Cards";
import StockDataFetcher from "../api/StockDataFetcher";

const Carousel = () => {
  const [stockData, setStockData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedStock, setExpandedStock] = useState(null);

  const symbols = useMemo(() => ["AAPL", "TSLA", "AMZN", "MSFT", "GOOGL"], []);

  // Handle data fetched from the API
  const handleDataFetched = useCallback((data) => {
    const updatedStockData = data.map((stock) => {
      const details = Array.isArray(stock.details) ? stock.details : [];
      const price = parseFloat(details.find((d) => d.label === "Price")?.value || "0");
      const openPrice = parseFloat(details.find((d) => d.label === "Open")?.value || "0");
      const percentageChange =
        price && openPrice ? (((price - openPrice) / openPrice) * 100).toFixed(2) : "0";

      return {
        logo: stockLogos[stock.symbol],
        title: stock.title,
        details: [
          { label: "Price", value: `$${price}` },
          { label: "Open Price", value: `$${openPrice}` },
          { label: "Change", value: `${percentageChange}%` },
        ],
        description: stockDescriptions[stock.symbol],
      };
    });

    setStockData(updatedStockData);
  }, []);

  // Predefined stock logos and descriptions
  const stockLogos = {
    AAPL: "apple.png",
    TSLA: "teslaa.png",
    AMZN: "/amazon.png",
    MSFT: "MSFT.png",
    GOOGL: "google.jpg",
  };

  const stockDescriptions = {
    AAPL: "Apple Inc. specializes in consumer electronics, software, and online services.",
    TSLA: "Tesla, Inc. designs and manufactures electric vehicles and energy products.",
    AMZN: "Amazon.com focuses on e-commerce, cloud computing, and AI.",
    MSFT: "Microsoft Corporation develops software, hardware, and cloud computing solutions.",
    GOOGL: "Google LLC provides Internet-related services and products, including search and advertising.",
  };

  // Calculate card style for carousel rotation
  const getCardStyle = (index) => {
    const total = stockData.length;
    const angle = (index - activeIndex) * (360 / total);
    return {
      transform: `rotateY(${angle}deg) translateZ(300px)`,
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
            onClick={() => setActiveIndex(index)}
          >
            <StockCard
              logo={stock.logo}
              title={stock.title}
              details={stock.details}
              description={stock.description}
              onExpand={() => setExpandedStock(stock)}
            />
          </div>
        ))}
      </div>

      {/* Expanded View (Modal) */}
      {expandedStock && (
        <div
          className="expanded-overlay"
          onClick={() => setExpandedStock(null)}
        >
          <div
            className="expanded-content"
            onClick={(e) => e.stopPropagation()}
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
              onClick={() => setExpandedStock(null)}
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