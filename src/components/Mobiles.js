import React, { Component } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import Item from "./Item";

export default class Mobiles extends Component {
  constructor() {
    super();
    this.state = { mobiles: [] };
  }
  mobilesList() {
    return this.state.mobiles.map(function (mobile) {
      return (
        <div key={mobile._id}>
          {/* {console.log(cloth._id)} */}
          <Item {...mobile} key={mobile._id} />
        </div>
      );
    });
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_SERVER}/mobiles`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ mobiles: response.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {
    axios
      .get(`${process.env.REACT_APP_SERVER}/mobiles`)
      .then((response) => {
        // console.log(rsponse.data);

        this.setState({ mobiles: response.data });
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
          mobiles Section
        </h2>

        <hr />
        {this.state.mobiles.length ? (
          this.mobilesList()
        ) : (
          <h5>SORRY NO ITEMS AVAILABLE</h5>
        )}
      </Container>
    );
  }
}
