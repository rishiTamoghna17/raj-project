import React, { Component } from "react";
import { MenuItems } from "./Menuitems";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {clicked:false}
  handleclick = ()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
    return (
      <nav className="NavberItems">
        <h1 className="navbar-logo">indiancybershield</h1>

        <div className="menu-icons" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <u1 className={this.state.clicked?"nav-menu active":"nav-menu"}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <Link className={items.cName} to={items.url}>
                  <i class={items.icon}></i>
                  {items.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </u1>
      </nav>
    );
  }
}
