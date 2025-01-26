import React from "react";
import "./Cards.css";

const StockCard = ({ logo, title, details, onExpand }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={logo} alt={`${title} Logo`} className="company-logo" />
      </div>
      <div className="bottom-section">
        <span className="title">{title}</span>
        <div className="row row1">
          {details.map((item, index) => (
            <div key={index} className="item">
              <span className="big-text">{item.value}</span>
              <span className="regular-text">{item.label}</span>
            </div>
          ))}
        </div>
        <button className="expand-button" onClick={onExpand}>
          Expand
        </button>
      </div>
    </div>
  );
};

export default StockCard;
