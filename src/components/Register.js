import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import "../components/css/register.css";
import "../config";

function Register() {
  const [{ user, userName }, dispatch] = useStateValue();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        dispatch({ type: "SET_USER", user: name });
        var body = {
          email: email,
          password: password,
          name: name,
          phone: phone,
        };
        console.log(body);
        axios
          .post(`${process.env.REACT_APP_SERVER}/users`, body)
          .then(function (result) {
            console.log(result);
          })
          .catch((err) => console.log(err));
        dispatch({ type: "SET_NAME", userName: name });
        setEmail("");
        setName("");
        setPhone("");
        setPassword("");
        console.log(user);
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login__box">
      <div className="title1">
        <h1>Register</h1>
      </div>
      <form className="form">
        <div className="username" style={{ marginTop: "25px" }}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="input"
            placeholder="Username"
            style={{ width: "300px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email" style={{ marginTop: "25px" }}>
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            className="input"
            placeholder="E-mail"
            style={{ width: "300px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="on"
          />
        </div>
        <div className="phone" style={{ marginTop: "25px" }}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="input"
            placeholder="Phone Number"
            style={{ width: "300px" }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          style={{ marginBottom: "10px" }}
          onClick={register}
        >
          Register
        </Button>
        <p
          style={{
            display: "flex",
            float: "inline-start",
            // flexDirection: "column-reverse",
          }}
        >
          Already have an account? &nbsp;<Link to="/login"> Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
