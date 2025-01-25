import React, { useState } from "react";
import "./Banner.css"; // Include your custom CSS styles here

const Banner = () => {
  const [news, setNews] = useState({}); // State to store stock news

  // Mock stock data
  const stockPicks = [
    {
      name: "AAPL",
      price: 150,
      change: "+1.5%",
      image: "https://cdn.pixabay.com/photo/2017/01/06/19/15/apple-1952811_1280.jpg", // Replace with a real image URL
    },
    {
      name: "TSLA",
      price: 700,
      change: "-2.3%",
      image: "https://cdn.pixabay.com/photo/2021/01/11/11/44/tesla-5905753_1280.jpg", // Replace with a real image URL
    },
    {
      name: "AMZN",
      price: 3200,
      change: "+0.8%",
      image: "https://cdn.pixabay.com/photo/2017/05/30/10/33/amazon-2352952_1280.png", // Replace with a real image URL
    },
    {
      name: "MSFT",
      price: 280,
      change: "+0.4%",
      image: "https://cdn.pixabay.com/photo/2014/07/08/11/28/ms-office-386521_1280.jpg", // Replace with a real image URL
    },
    {
      name: "GOOGL",
      price: 2700,
      change: "-1.1%",
      image: "https://cdn.pixabay.com/photo/2015/05/26/09/37/google-784222_1280.png", // Replace with a real image URL
    },
  ];

  // Function to fetch news for a stock (mock implementation)
  const fetchNews = (stockName) => {
    const mockNews = `Latest news about ${stockName}`;
    setNews((prev) => ({ ...prev, [stockName]: mockNews }));
  };

  return (
    <section className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Our Mission</h1>
        <p className="banner-text">
          At LPL Financial, we are dedicated to empowering financial advisors
          to achieve their clients' goals through personalized, independent,
          and comprehensive solutions.
        </p>
      </div>

      <div className="stock-picks">
        <h2>Top 5 Stock Picks</h2>
        <div className="stock-cards">
          {stockPicks.map((stock, index) => (
            <div key={index} className="card">
              <div
                className="image_container"
                style={{
                    backgroundImage: `url(${stock.image || "https://via.placeholder.com/150"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
              ></div>
              <div className="title">
                <span>{stock.name}</span>
              </div>
              <div className="size">
                <span>Price: ${stock.price}</span>
              </div>
              <div className="size">
                <span>Change: {stock.change}</span>
              </div>
              <div className="action">
                <button
                  className="cart-button"
                  onClick={() => fetchNews(stock.name)}
                >
                  <span>Latest News</span>
                </button>
              </div>
              {news[stock.name] && (
                <p className="news-text">{news[stock.name]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
