import React, { Component } from "react";
import Routes from "./Routes";
import Navbar from "./Navbar";
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import hazel from "./images/hazel.jpg";
import "./App.css";

class App extends Component {
  static defaultProps = {
    days: [
      {
        name: "Day1",
        title: "Engage, challenge, and bond with your dog",
        src: whiskey,
        facts: ["1...", "2...", "3..."],
      },
      {
        name: "Day2",
        title: "Walk with purpose",
        src: hazel,
        facts: ["1...", "2...", "3..."],
      },
      {
        name: "Day3",
        title: "Get out into nature",
        src: tubby,
        facts: ["1...", "2...", "3..."],
      },
    ],
  };
  render() {
    return (
      <div>
        <Navbar days={this.props.days} />
        <div className="container">
          <Routes days={this.props.days} />
        </div>
      </div>
    );
  }
}

export default App;
