import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

import Clothing from "./components/Clothing";
import Accessories from "./components/Accessories";
import Mobiles from "./components/Mobiles";
import Laptops from "./components/Laptops";
import Grocesseries from "./components/Grocerries";
import HomeAppliance from "./components/HomeAppliance";
import Register from "./components/Register";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Rcc from "./Rcc";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    return auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
        // console.log("sohail");
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/clothing" exact>
            <Clothing />
          </Route>
          <Route path="/accessories" exact>
            <Accessories />
          </Route>
          <Route path="/mobiles" exact>
            <Mobiles />
          </Route>
          <Route path="/laptops" exact>
            <Laptops />
          </Route>
          <Route path="/grocesseries" exact>
            <Grocesseries />
          </Route>
          <Route path="/homeAppliance" exact>
            <HomeAppliance />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          {user && user.email === "shaiksohail2332000@gmail.com" && (
            <Route path="/add">
              <Add />
            </Route>
          )}
          {user && user.email === "shaiksohail2332000@gmail.com" && (
            <Route path="/edit">
              <Edit />
            </Route>
          )}
          <Route path="/">
            <Body />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
