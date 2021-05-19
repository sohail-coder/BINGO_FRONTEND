import React, { Component } from "react";
import { useStateValue } from "./StateProvider";

export default class Rcc extends Component {
  static contextType = useStateValue;

  componentDidMount() {
    // const user = this.context;
    // const [{ user, cat }, dispatch] = useStateValue;
    console.log(useStateValue.user); // { name: 'Tania', loggedIn: true }
  }
  render() {
    return <div></div>;
  }
}
