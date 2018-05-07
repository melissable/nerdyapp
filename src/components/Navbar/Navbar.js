//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";
import logo from "./logo.png"

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-fixed-top pt-3 sticky-top">
         <ul>
          <li className="nav-item itemLeft"><img src={logo} className="logoimg img-fluid" alt="logo" /></li>
          <li className="nav-item itemCenter">Go head-to-head with these great minds.</li>
          <li className="nav-item itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
