import React from "react";
import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div>iStocks</div>
            </Link>
            <Link to="/stocks">
                <div>STOCKS</div>
            </Link><Link to="/About">
                <div>ABOUT</div>
            </Link>
        </div>
    )
}

export default Nav;