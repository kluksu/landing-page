import React, { Component } from "react";
import { ListGroup, Table } from "react-bootstrap";
import { FcCancel, FcCheckmark } from "react-icons/fc";
import PriceTable from "../components/PriceTable";
import SideForm from "../components/SideForm";
import { mokeUp } from "../components/utils";

export default class Pricing extends Component {
  render() {
    console.log(this.props.windowWidth);
    if (this.props.pageType === "boxes") {
      let boxesArr = [];
      let allFeaturesArr = [];
      mokeUp.forEach((plan) => {
        console.log(Object.entries(plan)[0][1]);
        let price = Object.values(plan)[1];
        console.log(price);
        let headline = Object.keys(plan)[0];
        let valueFeatures = Object.entries(plan)[0][1].valueFeatures;
        let features = Object.entries(plan)[0][1].features;
        if (
          Object.entries(plan)[0][1].features.length > allFeaturesArr.length
        ) {
          allFeaturesArr = Object.entries(plan)[0][1].features;
        }
        boxesArr.push(
          <PriceTable
            getPlaneTypeAndGoToForm={this.props.getPlaneTypeAndGoToForm}
            headline={headline}
            valueFeatures={valueFeatures}
            features={allFeaturesArr}
            supportedFeatures={features}
            price={`${price}`}
            backGround="white"
            color="blue"
          ></PriceTable>
        );
      });
      return (
        <div className="pricingPage">
          <h1>headline</h1>
          <div className="priceTablesGallery">{boxesArr}</div>{" "}
        </div>
      );
    } else if (this.props.pageType === "table") {
      console.log(mokeUp);
      let showPLansNames = [];
      let showPLansPrices = [];
      let longestFeatures = 0;
      let allFeatures = [];
      let rowsInfo = [];
      let allrowsInfo = [];
      let plansNames = mokeUp.map((plan) => {
        console.log(Object.keys(plan)[0]);
        return Object.keys(plan)[0];
      }); ///[free,basic,primium]
      let plansPrices = mokeUp.map((plan) => {
        console.log(Object.values(plan)[1]);
        return Object.values(plan)[1];
      }); ///[free,basic,primium]
      mokeUp.forEach((plan) => {
        console.log(Object.values(plan));
        if (Object.values(plan)[0].features.length > longestFeatures) {
          longestFeatures = Object.values(plan)[0].features.length;
          // console.log(longestFeatures);
          // console.log(plan[1].features);
          allFeatures = Object.values(plan)[0].features;
        }
      });
      let innerWidthFonts = this.props.windowWidth < 440 ? "12px" : "20px";
      plansNames.forEach((plan) => {
        console.log(plansNames);
        showPLansNames.push(
          <th
            style={{
              fontSize: this.props.windowWidth < 670 ? innerWidthFonts : "40px",
            }}
          >
            {plan}
          </th>
        );
      });
      plansPrices.forEach((price) => {
        console.log(plansNames);
        showPLansPrices.push(
          <th
            style={{
              fontSize: this.props.windowWidth < 670 ? innerWidthFonts : "40px",
            }}
          >
            {price}
          </th>
        );
      });

      console.log(allFeatures);
      allFeatures.forEach((feature) => {
        rowsInfo = [];

        mokeUp.forEach((plan) => {
          if (Object.values(plan)[0].features.includes(feature)) {
            rowsInfo.push(
              <td>
                <FcCheckmark></FcCheckmark>
              </td>
            );
          } else {
            rowsInfo.push(
              <td>
                <FcCancel></FcCancel>
              </td>
            );
          }
        });
        allrowsInfo.push(
          <tr>
            <td style={{ fontSize: innerWidthFonts }}>{feature}</td>
            {rowsInfo}
          </tr>
        );
      });
      let valueFeatures = Object.keys(
        Object.entries(mokeUp[0])[0][1].valueFeatures
      );
      let valueFeatureRow = [];
      valueFeatures.forEach((feature) => {
        valueFeatureRow = [];
        mokeUp.forEach((plan) => {
          console.log(Object.entries(plan)[0][1].valueFeatures[feature]);
          valueFeatureRow.push(
            <td style={{ fontSize: innerWidthFonts }}>
              {Object.entries(plan)[0][1].valueFeatures[feature]}
            </td>
          );
        });

        allrowsInfo.push(
          <tr>
            <td style={{ fontSize: innerWidthFonts }}>{feature}</td>
            {valueFeatureRow}
          </tr>
        );
      });
      console.log(valueFeatures);
      return (
        <Table>
          <thead>
            <tr>
              <th></th>
              {showPLansNames}
            </tr>
            <tr>
              {" "}
              <th></th>
              {showPLansPrices}
            </tr>
          </thead>
          <tbody>{allrowsInfo}</tbody>
        </Table>
      );
    }
  }
}
