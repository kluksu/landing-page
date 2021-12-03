import React, { Component } from "react";
import { shake } from "./utils";

export default class Ribua extends Component {
  render() {
    return (
      <div
       

        className={` ribua  ${
          this.props.selectedElement === "priceBox" ? shake : ""
        }`}
        onClick={() => this.props.selectElement("priceBox")}
        style={         this.props.priceBox
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
