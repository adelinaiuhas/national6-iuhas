import { Component } from "react";
import background from "./background.jpg";
import "./Home.css";

export class Home extends Component {
  render() {
    return <img src={background} alt="home" className="home" />;
  }
}
