import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Carousel />
      <Footer />
    </div>
  );
}

export default App;
