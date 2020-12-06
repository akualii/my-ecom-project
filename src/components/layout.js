import React, { Component } from "react";
import Header from "./headernavbar/header";
import Navbar from "./headernavbar/navbar";

class Layout extends Component {
  render() {
    return (
      <div classNmae="layout">
        {this.props.children}
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default Layout;
