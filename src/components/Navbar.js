import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Body from "./Body";
import Projects from "./Projects";
import Contact from "./Contact";

function Navbar() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/" className="nav-link hover-link" aria-label="Home">
            <span>H</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
          </Link>

          <Link
            to="/projects"
            className="nav-link hover-link"
            aria-label="Projects"
          >
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
          </Link>

          <Link
            to="/contact"
            className="nav-link hover-link"
            aria-label="Contact"
          >
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </Link>
        </nav>

        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
