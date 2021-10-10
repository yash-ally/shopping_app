import React, { Component } from "react";
import "./styles.css";

class AppHeader extends Component {
  render() {
    return (
      <>
        <div className="title-header">
          <h1>Flip the cart</h1>
          <span className="navlinks">
            <ul className="list-items">
              <li>Products</li>
              <li>Reviews</li>
              <li>Buying Guide</li>
              <li>Your Cart</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Log in/out</li>
            </ul>
          </span>
        </div>
      </>
    );
  }
}

export default AppHeader;
