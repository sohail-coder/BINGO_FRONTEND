import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "../components/css/login.css";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import axios from "axios";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user, userName }, dispatch] = useStateValue();

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        axios({
          method: "GET",
          url: `${process.env.REACT_APP_SERVER}/users/${email}`,
        })
          .then((result) => {
            console.log(result.data.data);
            dispatch({ type: "SET_NAME", userName: result.data.data });
          })
          .catch(function (err) {
            console.log(err);
          });
        dispatch({ type: "SET_USER", user: auth });
        setEmail("");
        setPassword("");
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login__box">
      <div className="title1">
        <h1>login</h1>
      </div>
      <form className="form">
        <div className="email" style={{ marginTop: "25px" }}>
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            className="input"
            placeholder="E-mail"
            style={{ width: "300px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">PASSWORD</label>
          <input
            className="input"
            type="password"
            placeholder="password"
            style={{ width: "300px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className="btnContainer">
        <Button
          variant="contained"
          color="primary"
          onClick={signin}
          style={{ marginBottom: "10px" }}
        >
          LOGIN
        </Button>
        <p
          style={{
            display: "flex",
            float: "inline-start",
            // flexDirection: "column-reverse",
          }}
        >
          Don't have an account? &nbsp;<Link to="/register"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
