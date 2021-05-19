import React, { Component } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import Item from "./Item";

export default class Accessories extends Component {
  constructor() {
    super();
    this.state = { accessories: [] };
  }
  accessoriesList() {
    return this.state.accessories.map(function (accessory) {
      return (
        <div key={accessory._id}>
          <Item {...accessory} key={accessory._id} />
        </div>
      );
    });
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_SERVER}/accessories`)
      .then((response) => {
        this.setState({ accessories: response.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {
    axios
      .get(`${process.env.REACT_APP_SERVER}/accessories`)
      .then((response) => {
        this.setState({ accessories: response.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#ffffe5", marginBottom: "20px" }}>
        <h2
          style={{
            letterSpacing: "8px",
            textTransform: "uppercase",
            fontFamily: "Times New Roman",
          }}
        >
          Accessories Section
        </h2>

        <hr />
        {this.state.accessories.length ? (
          this.accessoriesList()
        ) : (
          <h5>SORRY NO ITEMS AVAILABLE</h5>
        )}
      </Container>
    );
  }
}
