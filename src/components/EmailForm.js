import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Button, Container, Form } from "react-bootstrap";
import { sendEmailToMe } from "./utils";
import Recaptcha from "react-recaptcha";

export default class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      errorMessage: "",
    };
  }

  closeModalAndGoBackHome = () => {
    window.location.assign("/#/");
    this.props.closeGenericModal();
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  sendEmail = () => {
    this.setState({ errorMessage: "" });
    if (this.props.isRealUser === true) {
      if (
        this.state.name !== "" &&
        this.state.phone !== "" &&
        this.state.email !== "" &&
        this.state.subject !== "" &&
        this.state.message !== ""
      ) {
        //   e.preventDefault();

        //   emailjs
        //     .sendForm(
        //       "default_service",
        //       "template_bnhobxj",
        //       e.target,
        //       "user_luCcUIntINSgugJfQeWCK"
        //     )
        // template_1iam9bt

        // template_bnhobxj
        sendEmailToMe(
          this.state.name,
          this.state.email,
          this.state.phone,
          this.state.message,
          this.state.subject,
          "template_bnhobxj",
          this.props.captchaResponse
        ).then(
          (result) => {
            this.setState({
              errorMessage: "",
            });
            this.props.openGenericModal(
              "תודה רבה!",
              "קיבלנו את הפניה וניצור קשר בהקדם",
              <Button onClick={this.closeModalAndGoBackHome}>
                חזור לעמוד הראשי{" "}
              </Button>
            );
          },
          (error) => {
            this.setState({
              errorMessage: "אופס, יש תקלה, אנא נסה שנית מאוחר יותר",
            });
          }
        );
      } else {
        this.setState({
          errorMessage: "  הטופס לא נשלח, אנא ודא שכל השדות מלאים",
        });
      }
    } else {
      this.setState({ errorMessage: "בבקשה אשר שאינך רובוט" });
    }
  };
  componentDidMount = () => {
    if (this.props.selectedPlan) {
      this.setState({
        subject: this.props.selectedPlan,
        message: this.props.selectedPlanMessage,
      });
    }
  };
  render() {
    return (
      <Container
        style={{ display: this.props.display }}
        className="connectComponent"
      >
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> subject </Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              placeholder=""
              name="subject"
              value={this.state.subject}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>name</Form.Label>

            <Form.Control
              onChange={this.handleChange}
              name="name"
              type="text"
              placeholder=""
              value={this.props.name ? this.props.name : this.state.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>email</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="email"
              placeholder="name@example.com"
              name="email"
              value={this.props.email ? this.props.email : this.state.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>phone number</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="number"
              placeholder="xxx-xxxxxxx"
              name="phone"
              value={this.props.phone ? this.props.phone : this.state.phone}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>content </Form.Label>
            <Form.Control
              onChange={this.handleChange}
              //   type="text"
              as="textarea"
              rows={4}
              placeholder=""
              name="message"
              value={this.state.message}
            />
          </Form.Group>
          <Recaptcha
            sitekey="6LeVP1MdAAAAAIiCocQV_iqctlgartuvAu9LHfn8"
            render="explicit"
            onloadCallback={this.props.reCaptchaLoded}
            verifyCallback={this.props.verifyCallback}
          />
          <p className="FormRejects ">{this.state.errorMessage}</p>
          <Button onClick={this.sendEmail} className="w-100" type="button">
            submit
          </Button>
        </Form>
      </Container>
    );
  }
}
