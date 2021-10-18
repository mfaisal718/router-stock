import React from "react";
import { Link } from "react-router-dom";

const Stocks = (props) => {
    const Stocks = [
        { name: "Apple Inc.", symbol: "AAPL", price: "{stock.price}" },
        { name: "Microsoft Corporation", symbol: "MSFT", price: "{stock.price}" },
        { name: "Alphabet Inc.", symbol: "GOOGL", price: "{stock.price}" },
        { name: "Facebook, Inc.", symbol: "FB", price: "{stock.price}" },
        { name: "Oracle Corporation", symbol: "ORCL", price: "{stock.price}" },
        { name: "Intel Corporation", symbol: "INTL", price: "{stock.price}" }
    ];

    return (
        <div className="stocks">
            {Stocks.map((stock) => {
                const { name, symbol } = stock;

                return (
                    <Link to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}
        </div>
    );
};

export default Stocks;