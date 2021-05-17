import React, { Component } from "react";
import myself from "./me.jpg";
import "./Home.css";

const textArray = ["Senior Demand Planner", "Junior Web Developer"];
export class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <div className="home-container">
        <img src={myself} alt="myself" />
        <h2 className="my-name">Adelina Iuhas</h2>

        <p className="what-I-do">
          I am a <span>{textThatChanges}</span>
        </p>
      </div>
    );
  }
}
