import React, { Component } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import Item from "./Item";

export default class Clothing extends Component {
  constructor() {
    super();
    this.state = { clothes: [] };
  }
  clothesList() {
    return this.state.clothes.map(function (cloth) {
      return (
        <div key={cloth._id}>
          {/* {console.log(cloth._id)} */}
          <Item {...cloth} key={cloth._id} />
        </div>
      );
    });
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_SERVER}/clothing`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ clothes: response.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {
    axios
      .get(`${process.env.REACT_APP_SERVER}/clothing`)
      .then((response) => {
        // console.log(rsponse.data);

        this.setState({ clothes: response.data });
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
          Clothing Section
        </h2>

        <hr />
        {this.state.clothes.length ? (
          this.clothesList()
        ) : (
          <h5>SORRY NO ITEMS AVAILABLE</h5>
        )}
        {/* <Item />
        <Item /> */}
      </Container>
    );
  }
}
