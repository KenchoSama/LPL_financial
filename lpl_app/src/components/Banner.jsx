import React from "react";
import "./Banner.css";
import Carousel from "./Carousel";

const Banner = () => {
  const stockData = [
    {
      logo: "https://cdn.pixabay.com/photo/2017/01/06/19/15/apple-1952811_1280.jpg",
      title: "AAPL",
      details: [
        { value: "$150", label: "Price" },
        { value: "+1.5%", label: "Change" },
        { value: "Strong Buy", label: "Rating" },
      ],
    },
    {
      logo: "https://cdn.pixabay.com/photo/2021/01/11/11/44/tesla-5905753_1280.jpg",
      title: "TSLA",
      details: [
        { value: "$700", label: "Price" },
        { value: "-2.3%", label: "Change" },
        { value: "Buy", label: "Rating" },
      ],
    },
    {
      logo: "https://cdn.pixabay.com/photo/2017/05/30/10/33/amazon-2352952_1280.png",
      title: "AMZN",
      details: [
        { value: "$3200", label: "Price" },
        { value: "+0.8%", label: "Change" },
        { value: "Hold", label: "Rating" },
      ],
    },
    {
      logo: "https://cdn.pixabay.com/photo/2014/07/08/11/28/ms-office-386521_1280.jpg",
      title: "MSFT",
      details: [
        { value: "$280", label: "Price" },
        { value: "+0.4%", label: "Change" },
        { value: "Strong Buy", label: "Rating" },
      ],
    },
    {
      logo: "https://cdn.pixabay.com/photo/2015/05/26/09/37/google-784222_1280.png",
      title: "GOOGL",
      details: [
        { value: "$2700", label: "Price" },
        { value: "-1.1%", label: "Change" },
        { value: "Hold", label: "Rating" },
      ],
    },
  ];

  return (
    <div className="banner">
      <h2 className="banner-title">Top Stock Picks</h2>
      <Carousel stocks={stockData} />
    </div>
  );
};

export default Banner;
