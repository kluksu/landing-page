import React, { Component } from "react";
import EmailForm from "../components/EmailForm";

export default class Contact extends Component {
  render() {
    return (
      <div className="contactPage">
        <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting 


        </h1>
        <EmailForm
        selectedPlanMessage={this.props.selectedPlanMessage}
        selectedPlan={this.props.selectedPlan}
          captchaResponse={this.props.captchaResponse}
          isRealUser={this.props.isRealUser}
          verifyCallback={this.props.verifyCallback}
          reCaptchaLoded={this.props.reCaptchaLoded}
          handleVerified={this.props.handleVerified}
          closeGenericModal={this.props.closeGenericModal}
          openGenericModal={this.props.openGenericModal}
        ></EmailForm>
      </div>
    );
  }
}
