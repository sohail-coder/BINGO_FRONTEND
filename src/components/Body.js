import React, { useState } from "react";
import Category from "./Category";
import "./css/body.css";
import data from "./Data";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import { useStateValue } from "../StateProvider";

function Body() {
  const [categories, setCategories] = useState(data);
  // require("dotenv").config();
  const [{ user }, dispatch] = useStateValue();
  return (
    <div style={{ marginLeft: "100px" }}>
      <Container className="container">
        {user && user.email === `${process.env.REACT_APP_EMAIL}` && (
          <div style={{ float: "right" }}>
            <Link to="/add" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<AddIcon fontSize="large" />}
              >
                Add item
              </Button>
            </Link>
          </div>
        )}

        <Row>
          {categories.map((category) => {
            return (
              <Col xs="12" md="4" sm="6" lg="3">
                <div key={new Date().getTime().toString()}>
                  <Link
                    to={`${category.uri}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Category {...category} />
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Body;
