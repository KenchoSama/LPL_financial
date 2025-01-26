import React, { useState, useEffect } from "react";

const StockDataFetcher = () => {
  const [data, setData] = useState(null); // Store the raw JSON data
  const [loading, setLoading] = useState(true); // Indicates loading state
  const [error, setError] = useState(null); // Holds any error messages

  // Fetch data from the API
  const fetchStockData = async () => {
    try {
      const response = await fetch(
        "https://l8wn9lk110.execute-api.us-west-2.amazonaws.com/dev1/getStockPrice?symbol=AAPL"
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonResponse = await response.json();
      console.log("Raw API Response:", jsonResponse);

      setData(jsonResponse); // Store the entire JSON object
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

  // Display the entire JSON object
  return (
    <div>
      <h2>Fetched JSON Data</h2>
      <pre style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
        {JSON.stringify(data, null, 2)} {/* Pretty-print JSON */}
      </pre>
    </div>
  );
};

export default StockDataFetcher;
