import React, { Component } from "react";

class Guide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.randomuser.me/");
    const results_received = await response.json();
    this.setState({
      loading: false,
      data: results_received.results,
    });
  }

  render() {
    const { loading, data } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }

    if (!data) {
      return <div>Sorry no data found. Try again next time.</div>;
    }

    return (
      <>
        <div>
          {data.map((data_items) => (
            <ul>
              <li>
                {data_items.name.title} {data_items.name.first}{" "}
                {data_items.name.last}
              </li>
            </ul>
          ))}
        </div>
      </>
    );
  }
}

export default Guide;
