import React, { Component } from "react";
import { ListGroup, Table } from "react-bootstrap";
import PriceTable from "../components/PriceTable";
import { mokeUp } from "../components/utils";

export default class Pricing extends Component {
  render() {
    if (this.props.pageType === "boxes") {
      let boxesArr = [];
      let allFeaturesArr = [];
      Object.entries(mokeUp).forEach((plan) => {
        let headline = plan[0];
        let valueFeatures = plan[1].valueFeatures;
        let features = plan[1].features;
        if (plan[1].features.length > allFeaturesArr.length) {
          allFeaturesArr = plan[1].features;
        }
        boxesArr.push(
          <PriceTable
            getPlaneTypeAndGoToForm={this.props.getPlaneTypeAndGoToForm}
            headline={headline}
            valueFeatures={valueFeatures}
            features={allFeaturesArr}
            supportedFeatures={features}
            price={"$$$"}
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
      Object.entries(mokeUp).forEach((plan) => {
        let headline = plan[0];
        let valueFeatures = plan[1].valueFeatures;
        let features = plan[1].features;
      });
      // let plansArr = [];
      // let plans = this.props.headline;
      // plans.forEach((plan) => {
      //   plansArr.push(<td>{plan}</td>);
      // });

      // let featuresArr = [];
      // this.props.features.forEach((feature) => {
      //   featuresArr.push(
      //     <tr>
      //       <td>{feature}</td>
      //     </tr>
      //   );
      // });
      // return (
      //   <div className="pricingPageTable">
      //     <Table striped bordered hover>
      //       <thead>
      //         <tr>
      //           <th>#</th>
      //           {plansArr}
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {featuresArr}
      //         <tr></tr>
      //       </tbody>
      //     </Table>
      //   </div>
      // );
    }
  }
}
