import React, { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Ribua from "./Ribua";
import { FcCheckmark, FcCancel, FcInfo } from "react-icons/fc";
import { shake } from "./utils";

export default class PriceTable extends Component {
  render() {
    let valueFeaturesArr = [];
    Object.entries(this.props.valueFeatures).forEach((feature) => {
      valueFeaturesArr.push(
        <ListGroup.Item action>
          {" "}
          <FcInfo></FcInfo> {`${feature[0]} : ${feature[1]}`}{" "}
        </ListGroup.Item>
      );
    });

    let featuresArr = [];
    let sign = "";
    this.props.features.forEach((feature) => {
      if (this.props.supportedFeatures.includes(feature)) {
        sign = <FcCheckmark></FcCheckmark>;
      } else {
        sign = <FcCancel></FcCancel>;
      }
      featuresArr.push(
        <ListGroup.Item action>
          <span>{sign}</span> {<span>{feature} </span>}
        </ListGroup.Item>
      );
    });
    return (
      <div
        className="priceTabel"
        style={{ background: this.props.pricePageBackground }}
      >
        <Ribua
          height={this.props.height}
          maxWidth={this.props.maxWidth}
          background={this.props.pricingBoxesBackground}
          text={
            <>
              <h1
                className={`changable ${
                  this.props.selectedElement === "priceBoxHeadline" ? shake : ""
                }`}
                onClick={() => this.props.selectElement("priceBoxHeadline")}
                style={this.props.priceBoxHeadline}
              >
                {this.props.headline}
              </h1>
              <h1 style={{ color: this.props.pricingBoxesPrice }}>
                {this.props.price}
              </h1>
              <ListGroup variant="flush">
                {" "}
                {valueFeaturesArr}
                {featuresArr}
              </ListGroup>{" "}
              <Button
                type="button"
                onClick={() => {
                  this.props.getPlaneTypeAndGoToForm(this.props.headline);
                }}
              >
                ask to join
              </Button>
            </>
          }
        ></Ribua>
      </div>
    );
  }
}
{
  /* <div className="ribua" style={{maxWidth:this.props.maxWidth, height:this.props.height, background:this.props.background}} > */
}

// <PriceTable headline={} supportedFeatures={[]} unSupportedFeatures={[]} price={} backGround="" color=""></PriceTable>
