import React from "react";

const Price = (props) => {
    // Our api key 
    const apiKey = "414f212a4e6dbb051e41795888f7fe99";
    // Grabbing the Stock symbol from the URL Param
    const symbol = props.match.params.symbol;
    // Using the other two variables to create our URL
    const url = `https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=${apiKey}`;

    //state to hold the stock data
    const [stock, setStock] = React.useState(null);

    //function to fetch stock data
    const getStock = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setStock(data);
    };

    // useEffect to run getStock when component mounts
    React.useEffect(() => {
        getStock();
    }, []);

    // loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h2>Name: {stock.name}</h2>
                <h2>Price: {stock.price}</h2>
            </div>
        );
    };

    // Function for when data doesn't exist
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    // if stock has data, run the loaded function, otherwise, run loading
    return stock ? loaded() : loading();
};

export default Price;