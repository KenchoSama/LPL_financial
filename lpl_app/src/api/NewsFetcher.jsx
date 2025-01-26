import {useEffect} from "react"

const NewsDataFetcher = ({ symbols, onDataFetched }) => { 
    useEffect(() => {
        const fetchNews = async () => {
            try{
                const news = await Promise.all(
                    symbols.map((symbol) => {
                        fetch(symbol)
                    })
                )
                console.log("Fetched News: ", news)
                onDataFetched(news)
            } catch (err) { console.error("Error fetching stock data:", error) }
        }
        
        const fetch = async (symbol) => {
            const response = await fetch(`https://l8wn9lk110.execute-api.us-west-2.amazonaws.com/dev1/getNewsArticles?symbols=${symbol}`)
            if (!response.ok) 
                throw new Error(`HTTP error for ${symbol}: Status ${response.status}`);
            
            const jsonResponse = await response.json();
            return {
                symbol,
                ...(jsonResponse.body ? JSON.parse(jsonResponse.body) : jsonResponse)
            }
        }
        
        fetchNews();
    }, [symbols, onDataFetched])
    return null
}

export default NewsDataFetcher;