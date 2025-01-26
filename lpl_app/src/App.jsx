import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import StockDataFetcher from "./components/StockDataFetcher";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      
      {/* Carousel */}
        <Carousel />
      

      {/* Stock Data Fetcher */}
      <StockDataFetcher />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
