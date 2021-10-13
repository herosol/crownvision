import React, { Component } from "react";
import logo from "../../assets/images/logo.png";

export default class HeaderLogo extends Component {
  render() {
    const { type } = this.props;
    const typeClasses = type === "header" ? "logo ease" : "footLogo";
    return (
      <div className={typeClasses}>
        <a style={{ display: "block" }}>
          <img src={logo} alt="header-logo" />
        </a>
      </div>
    );
  }
}
