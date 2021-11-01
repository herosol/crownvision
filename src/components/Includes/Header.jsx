import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../Common/HeaderLogo";

class Header extends Component {
  render() {
    return (
      <header className="ease">
        <div className="contain">
          <HeaderLogo type="header" />
          <div className="toggle">
            <span />
          </div>
          <nav className="ease">
            <ul id="nav">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="/locations">Locations</Link>
              </li>
              <li className="">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="">
                <Link to="/contact-us">Contact us</Link>
              </li>
              <li className="btnLi">
                <Link to="/auth/enter">Login</Link>
              </li>
            </ul>
          </nav>
          <div className="clearfix" />
        </div>
      </header>
    );
  }
}

export default Header;
