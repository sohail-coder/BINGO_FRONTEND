import React from "react";
import { Row, Col } from "reactstrap";
import StarIcon from "@material-ui/icons/Star";
import "../components/css/item.css";
import Button from "@material-ui/core/Button";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function Item(product) {
  var rating = product.rating;
  const stars = [];
  const [{ user, cat }, dispatch] = useStateValue();
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_SERVER}${product.uri}/${product.id}`)
      .then((result) => {
        console.log("delete success");
      })
      .catch(function (err) {
        console.log(err);
      });
    // alert("hello");
  };

  const handleEdit = (e) => {
    // alert(product.id);
    dispatch({ type: "SET_ID", id: product.id });
    dispatch({ type: "SET_URI", cat: product.uri });
  };

  for (var i = 0; i < rating; i++) {
    stars.push(<StarIcon style={{ color: "gold" }} />);
  }
  return (
    <div className="item__box">
      <div className="item__contents">
        <Row>
          <Col md="3">
            <div className="item__img">
              <img src={product.img} alt={product.name} />
            </div>
          </Col>
          <Col md="9">
            <div className="item_info">
              <h4 style={{ letterSpacing: "1px", textTransform: "capitalize" }}>
                <b>{product.name}</b>
              </h4>
              <p style={{ fontFamily: "fantasy" }}>{product.description}</p>
              <h5 style={{ color: "tomato" }}>₹ {product.price}</h5>
              {stars}
              <p style={{ marginLeft: "3px" }}>
                FREE Delivery by Thursday, May{" "}
              </p>

              <div className="item__buttons">
                <Row>
                  <Col sm="4">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "gold",
                        color: "black",
                        width: "150px",
                      }}
                    >
                      view item
                    </Button>
                  </Col>
                  <Col sm="4">
                    <button
                      class="snipcart-add-item"
                      data-item-id={product._id}
                      data-item-price={product.price}
                      data-item-url={`${product.uri}/${product._id}`}
                      data-item-description={product.description}
                      data-item-image={product.img}
                      data-item-name={product.name}
                    >
                      Add to cart
                    </button>
                  </Col>
                </Row>
                {user && user.email === `${process.env.REACT_APP_EMAIL}` && (
                  <div style={{ marginTop: "10px" }}>
                    <Row>
                      <Col sm="4">
                        <Link to="/edit" style={{ textDecoration: "none" }}>
                          <Button
                            className="btn"
                            variant="contained"
                            onClick={(e) => {
                              handleEdit(e);
                            }}
                            style={{
                              backgroundColor: "tomato",
                              color: "white",
                              width: "150px",
                            }}
                            startIcon={
                              <EditOutlinedIcon
                                style={{ color: "" }}
                                fontSize="small"
                              />
                            }
                          >
                            edit
                          </Button>
                        </Link>
                      </Col>
                      <Col sm="4">
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{ width: "150px" }}
                          onClick={(e) => handleDelete(e)}
                          startIcon={<DeleteIcon style={{ color: "" }} />}
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Item;
