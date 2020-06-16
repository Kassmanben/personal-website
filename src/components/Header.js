import React from "react";
import "./Header.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Body from "./Body";

function Header() {
  return (
    <div className="header">
      <a href="/">Ben Kassman</a>
    </div>
  );
}

export default Header;
