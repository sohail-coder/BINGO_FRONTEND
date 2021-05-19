import React, { Component } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import Item from "./Item";

export default class Grocerries extends Component {
  constructor() {
    super();
    this.state = { grocerries: [] };
  }
  grocerriesList() {
    return this.state.grocerries.map(function (grocerry) {
      return (
        <div key={grocerry._id}>
          {/* {console.log(cloth._id)} */}
          <Item {...grocerry} key={grocerry._id} />
        </div>
      );
    });
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_SERVER}/grocceries`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ grocerries: response.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {
    axios
      .get(`${process.env.REACT_APP_SERVER}/grocceries`)
      .then((response) => {
        // console.log(rsponse.data);

        this.setState({ grocerries: response.data });
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
          grocerries Section
        </h2>

        <hr />
        {this.state.grocerries.length ? (
          this.grocerriesList()
        ) : (
          <h5>SORRY NO ITEMS AVAILABLE</h5>
        )}
        {/* <Item />
        <Item /> */}
      </Container>
    );
  }
}
