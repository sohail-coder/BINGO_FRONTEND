import React, { Component } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import Item from "./Item";

export default class HomeAppliance extends Component {
  constructor() {
    super();
    this.state = { homeAppliances: [] };
  }
  homeAppliancesList() {
    return this.state.homeAppliances.map(function (homeAppliance) {
      return (
        <div key={homeAppliance._id}>
          {/* {console.log(cloth._id)} */}
          <Item {...homeAppliance} key={homeAppliance._id} />
        </div>
      );
    });
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_SERVER}/homeAppliance`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ homeAppliances: response.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {
    axios
      .get(`${process.env.REACT_APP_SERVER}/homeAppliance`)
      .then((response) => {
        // console.log(rsponse.data);

        this.setState({ homeAppliances: response.data });
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
          home Appliances Section
        </h2>

        <hr />
        {this.state.homeAppliances.length ? (
          this.homeAppliancesList()
        ) : (
          <h5>SORRY NO ITEMS AVAILABLE</h5>
        )}
      </Container>
    );
  }
}
