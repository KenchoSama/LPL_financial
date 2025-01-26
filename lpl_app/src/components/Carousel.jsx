import React, { useState, useEffect } from "react";
import "./Carousel.css";
import StockCard from "./Cards";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the center card
  const [expandedStock, setExpandedStock] = useState(null); // Track the expanded stock
  const [stockData, setStockData] = useState([]); // State for fetched stock data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchStockData = async () => {
    try {
      const symbols = ["TSLA", "AAPL", "AMZN", "MSFT", "GOOGL"]; // Stock symbols to fetch
      const promises = symbols.map((symbol) =>
        fetch(
          `https://l8wn9lk110.execute-api.us-west-2.amazonaws.com/dev1/getStockPrice?symbol=${symbol}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => ({
            title: data.title || symbol, // Use `title` from API or fallback to `symbol`
            details: data.details || [], // Use `details` array from API
            description: `Stock data for ${symbol}`, // Placeholder description
            logo: `https://via.placeholder.com/150?text=${symbol}`, // Placeholder logo
          }))
      );
  
      const results = await Promise.all(promises);
      setStockData(results); // Update state with fetched data
      setLoading(false);
    } catch (err) {
      console.error("Error fetching stock data:", err);
      setError("Failed to fetch stock data");
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchStockData();
  }, []);

  const getCardStyle = (index) => {
    const total = stockData.length;
    const angle = (index - activeIndex) * (360 / total); // Calculate rotation angle
    const translateZ = 300; // Distance from the center
    const rotateY = angle;

    return {
      transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
    };
  };

  if (loading) return <div>Loading stock data...</div>;
  if (error) return <div>Error: {error}</div>;

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
              details={[
                { value: stock.price, label: "Price" },
                { value: stock.change, label: "Change" },
                { value: stock.rating || "N/A", label: "Rating" },
              ]}
              description={stock.description || "No description available"}
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
