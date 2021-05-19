import React, { useState } from "react";
import { Container, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { useHistory } from "react-router-dom";

import axios from "axios";

import "./css/add.css";

function Add() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [uri, setUri] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    var body = { name, price, uri, img, description, rating, brand };
    console.log(body);
    axios
      .post(`${process.env.REACT_APP_SERVER}${uri}`, body)
      .then((result) => {
        setBrand("");
        setDescription("");
        setImg("");
        setName("");
        setPrice("");
        setRating("");
        history.push(`${uri}`);
        setUri("");
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <div className="cont1">
      <Container>
        <h1>Add Item</h1>
        <hr />
        <div className="box">
          <Form
            className="form1"
            type="submit"
            onSubmit={(e) => handleSubmit(e)}
          >
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
              endIcon={<SendIcon />}
              onClick={(e) => handleSubmit(e)}
            >
              ADD
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Add;
