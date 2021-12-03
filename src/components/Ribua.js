import React, { Component } from "react";
import { shake } from "./utils";

export default class Ribua extends Component {
  render() {
    return (
      <div
        className={` ribua changableBackground  ${
          this.props.selectedElement === "priceBox" ? shake : ""
        }`}
        onClick={(e) => this.props.selectElement(e, "priceBox")}
        style={
          this.props.priceBox
          // {
          //   maxWidth: this.props.maxWidth,
          //   height: this.props.height,
          // }
        }
      >
        {this.props.text}
      </div>
    );
  }
}
