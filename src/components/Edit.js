import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useHistory } from "react-router-dom";

import axios from "axios";
import "./css/edit.css";
import { useStateValue } from "../StateProvider";

function Edit() {
  const [{ id, cat }, dispatch] = useStateValue();
  const history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  var [uri, setUri] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");

  function fetch() {
    axios
      .get(`${process.env.REACT_APP_SERVER}${cat}/${id}`)
      .then((result) => {
        setName(result.data.name);
        setPrice(result.data.price);
        //   uri : result.data.uri;
        setUri(result.data.uri);
        setImg(result.data.img);
        setDescription(result.data.description);
        setRating(result.data.rating);
        setBrand(result.data.brand);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(() => fetch(), [1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var body = { name, price, uri, img, description, rating, brand };
    axios
      .put(`${process.env.REACT_APP_SERVER}${uri}/${id}`, body)
      .then((result) => {
        setName("");
        setPrice("");
        setBrand("");
        setRating("");
        setImg("");
        setDescription("");
        history.push(`${uri}`);
        setUri("");
      });
  };
  return (
    <div>
      <div className="cont1">
        <Container>
          <h1
            style={{
              textTransform: "uppercase",
              letterSpacing: "10px",
              color: "orange",
              textAlign: "center",
            }}
          >
            Edit product
          </h1>
          <hr />
          <div className="box">
            <Form className="form1" type="submit">
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="name">Name of the Product</Label>
                    <Input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <Label for="category">Categoty of Product</Label>
                  <Input
                    type="text"
                    name="category"
                    value={uri}
                    placeholder="start with /"
                    disabled
                    onChange={(e) => setUri(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="price">Price</Label>
                    <Input
                      type="text"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label for="brand">Brand</Label>
                    <Input
                      type="text"
                      name="brand"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md="2">
                  <FormGroup>
                    <Label for="rating">Rating (0-5)</Label>
                    <Input
                      type="number"
                      name="rating"
                      min="0"
                      max="5"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="image">Image URL</Label>
                <Input
                  type="text"
                  name="image"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
              </FormGroup>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="desc">Description of Product</Label>
                    <Input
                      type="textarea"
                      name="desc"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows="5"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button
                style={{ marginTop: "20px" }}
                variant="contained"
                color="primary"
                endIcon={<SaveIcon />}
                onClick={(e) => handleSubmit(e)}
              >
                save
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Edit;
