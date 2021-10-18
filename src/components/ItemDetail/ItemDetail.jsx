import React, { Component } from "react";
import "./styles.css";

class ItemDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      item_details: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const url = "https://fakestoreapi.com/products";
    console.log("Props: ", this.props);
    const response = await fetch(`${url}/${match.params.id}`);
    const item = await response.json();
    this.setState({
      loading: false,
      item_details: item,
    });
    console.log("item: ", item);
  }

  render() {
    const { loading, item_details } = this.state;
    if (loading) {
      return <div>Wait a moment..</div>;
    }
    if (!item_details) {
      return <div>Sorry, We were not able to find the requested Item..</div>;
    }
    if (item_details) {
      const { title, description } = item_details;
      return (
        <div>
          <h1>{title}</h1>
          <img src={item_details.image} />
          <div className="product">
            <p className="description-text">{description}</p>
            <ul className="product-list">
              <li>
                <button className="cart-btn">Add to Cart</button>
              </li>
              <li>
                <button className="btn">Buy Now</button>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default ItemDetail;
