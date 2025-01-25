import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      
      {/* Banner */}
      <main className="main-content">
        <Banner />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
