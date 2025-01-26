import React, { useState, useEffect } from "react";

const StockDataFetcher = () => {
  const [data, setData] = useState(null); // Store the processed data
  const [loading, setLoading] = useState(true); // Indicates loading state
  const [error, setError] = useState(null); // Holds any error messages

  const fetchStockData = async () => {
    try {
      console.log("Fetching stock data...");
      const response = await fetch(
        "https://l8wn9lk110.execute-api.us-west-2.amazonaws.com/dev1/getStockPrice?symbol=AAPL"
      );
  
      console.log("HTTP Response:", response);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const jsonResponse = await response.json();
      console.log("Raw API Response:", jsonResponse);
  
      // If `body` is a string, parse it; otherwise, use the raw response
      const rawData = jsonResponse.body ? JSON.parse(jsonResponse.body) : jsonResponse;
      console.log("Parsed Raw Data:", rawData);
  
      setData(rawData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching stock data:", err);
      setError("Failed to fetch stock data");
      setLoading(false);
    }
  };
  

  // Fetch data on mount
  useEffect(() => {
    fetchStockData();
  }, []);

  if (loading) return <div>Loading stock data...</div>;
  if (error) return <div>Error: {error}</div>;

  // Display the raw data in pretty-print format
  return (
    <div>
      <h2>Fetched Stock Data</h2>
      <pre style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
        {JSON.stringify(data, null, 2)} {/* Pretty-print JSON */}
      </pre>
    </div>
  );
};

export default StockDataFetcher;
