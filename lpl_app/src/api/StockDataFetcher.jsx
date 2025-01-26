import { useEffect } from "react";

const StockDataFetcher = ({ symbols, onDataFetched }) => {
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const stockData = await Promise.all(
          symbols.map((symbol) =>
            fetchStock(symbol)
          )
        );

        console.log("Fetched Stock Data: ", stockData);
        onDataFetched(stockData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    const fetchStock = async (symbol) => {
      const response = await fetch(`https://l8wn9lk110.execute-api.us-west-2.amazonaws.com/dev1/getStockPrice?symbol=${symbol}`);

      if (!response.ok)
        throw new Error(`HTTP error for ${symbol}: Status ${response.status}`);

      const jsonResponse = await response.json();
      return { 
        symbol, 
        ...(jsonResponse.body ? JSON.parse(jsonResponse.body) : jsonResponse) 
      };
    };

    fetchStockData();
  }, [symbols, onDataFetched]);

  return null; // Component is non-visual
};

export default StockDataFetcher;