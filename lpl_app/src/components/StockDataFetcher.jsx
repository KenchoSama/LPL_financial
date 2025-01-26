import React, { useEffect } from "react";

const StockDataFetcher = ({ symbols, onDataFetched }) => {
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const stockData = await Promise.all(
          symbols.map(async (symbol) => {
            const response = await fetch(
              `https://l8wn9lk110.execute-api.us-west-2.amazonaws.com/dev1/getStockPrice?symbol=${symbol}`
            );

            if (!response.ok) {
              throw new Error(`HTTP error for ${symbol}: Status ${response.status}`);
            }

            const jsonResponse = await response.json();
            const parsedData = jsonResponse.body
              ? JSON.parse(jsonResponse.body)
              : jsonResponse;

            return { symbol, ...parsedData }; // Attach the symbol for identification
          })
        );

        console.log("Fetched Stock Data:", stockData);

        // Send the fetched data to the parent component
        onDataFetched(stockData);
      } catch (err) {
        console.error("Error fetching stock data:", err);
      }
    };

    fetchStockData();
  }, [symbols, onDataFetched]);

  return null; // This component doesn't render anything
};

export default StockDataFetcher;
