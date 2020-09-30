import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./sass/main.scss";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: false,
    };

    this.changeTheme = this.changeTheme.bind(this);
  }

  changeBackground() {
    if (this.state.dark) {
      document.body.style.backgroundColor = "#443D45";
    } else {
      document.body.style.backgroundColor = "#ffffff";
    }
  }

  changeTheme() {
    this.setState({ dark: !this.state.dark }, this.changeBackground);
  }

  render() {
    return (
      <div
        className={
          "App theme " + (this.state.dark ? "theme--dark" : "theme--default")
        }
      >
        <Header />
        <Navbar />
        <button onClick={this.changeTheme}>Change</button>
      </div>
    );
  }
}
