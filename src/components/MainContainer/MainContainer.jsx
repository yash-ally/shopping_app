import React, { Component } from "react";
import "./styles.css";

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      dataLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          items: json,
          dataLoaded: true,
        });
      });
  }

  render() {
    const { items, dataLoaded } = this.state;
    if (!dataLoaded) return <div>Loading.. Please Wait..</div>;

    return (
      <div>
        This is the main container.
        <br />
        Api for products:{" "}
        <a href="https://fakestoreapi.com/products">
          https://fakestoreapi.com/products
        </a>
        <h3>The items in the list are as follows: </h3>
        <div className="products">
          {items.map((item) => (
            <ol className="product-list">
              <li className="product-name"> {item.title}</li>
              <li>
                <img src={item.image} />
              </li>
              Price:<li className="product-price"> {item.price}</li>
              Description:
              <li className="product-description"> {item.description}</li>
              <li>
                <button className="btn">Buy Now</button>
              </li>
            </ol>
          ))}
        </div>
      </div>
    );
  }
}

export default MainContainer;
