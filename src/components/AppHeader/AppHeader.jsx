import React, { Component } from "react";
import { Link } from "react-router-dom";
import YourCart from "../../pages/YourCart/YourCart";
import Products from "../../pages/Products/Products";
import "./styles.css";

class AppHeader extends Component {
  render() {
    const path = process.env.PUBLIC_URL;
    return (
      <>
        <div className="title-header">
          <h1>Flip the cart</h1>
          <span className="navlinks">
            <ul className="list-items">
              <li>
                <Link to={`${path}/products`}>Products</Link>
              </li>
              <li>
                <Link to={"/reviews"}>Reviews</Link>
              </li>
              <li>
                <Link to={"/guide"}>Buying Guide</Link>
              </li>
              <li>
                <Link to={`${path}/cart`}>Your Cart</Link>
              </li>
              <li>
                <Link to={`${path}/about us`}>About Us</Link>
              </li>
              <li>
                <Link to={`${path}/contact us`}>Contact Us</Link>
              </li>
              <li>
                <Link to={`${path}/login`}>Log in/out</Link>
              </li>
            </ul>
          </span>
        </div>
      </>
    );
  }
}

export default AppHeader;
