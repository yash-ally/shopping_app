import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import YourCart from "../../pages/YourCart/YourCart";
import Products from "../../pages/Products/Products";
import "./styles.css";

class AppHeader extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="title-header">
            <h1>Flip the cart</h1>
            <span className="navlinks">
              <ul className="list-items">
                <li>
                  <Link to={"/"}>Products</Link>
                </li>
                <li>
                  <Link to={"/"}>Reviews</Link>
                </li>
                <li>Buying Guide</li>
                <li>
                  <Link to="./pages/YourCart/YourCart">Your Cart</Link>
                </li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Log in/out</li>
              </ul>
            </span>
          </div>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/pages/YourCart/YourCart" component={YourCart} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default AppHeader;
