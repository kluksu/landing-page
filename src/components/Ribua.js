import React, { Component } from "react";

export default class Ribua extends Component {
  render() {
    return (
      <div
        className="ribua"
        style={{
          maxWidth: this.props.maxWidth,
          height: this.props.height,
          background: this.props.background,
        }}
      >
        {this.props.text}
      </div>
    );
  }
}
