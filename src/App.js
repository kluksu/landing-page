import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Component } from "react";
import MyNavBar from "./components/MyNavBar";
import GenericModal from "./components/GenericModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { init } from "emailjs-com";
import Pricing from "./pages/Pricing";
import { mokeUp } from "./components/utils";
import SideForm from "./components/SideForm";
// init("user_luCcUIntINSgugJfQeWCK");
// import emailjs from 'emailjs-com';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricePageType: "boxes",
      captchaResponse: "",
      modalBottom: "",
      modalText: "",
      modalTop: "",
      isGenericModalOpen: false,
      isRealUser: false,
      selectedPlan: "",
      windowWidth: "",
      windowHeight: "",
    };
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.pricePageType !== prevState.pricePageType) {
      console.log(this.state.pageType);
    }
  };
  getFormState = (event, state) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  updateDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  closeGenericModal = () => {
    this.setState({ modalText: "" });
    this.setState({ modalTop: "" });
    this.setState({ modalBottom: "" });
    this.setState({ isGenericModalOpen: false });
  };
  openGenericModal = (top, text, bottom) => {
    this.setState({ modalText: text });
    this.setState({ modalTop: top });
    this.setState({ modalBottom: bottom });

    this.setState({ isGenericModalOpen: true });
  };
  verifyCallback = (response) => {
    if (response) {
      console.log(response);
      this.setState({ captchaResponse: response });
      this.setState({ isRealUser: true });
      setTimeout(
        () => {
          this.setState({ isRealUser: false });
        },

        60000
      );
    } else {
      this.setState({ isRealUser: false });
    }
  };
  reCaptchaLoded = () => {
    console.log("reacptcha has loaded");
  };
  handleVerified = () => {
    if (this.state.isRealUser === true) {
      alert("ok");
    } else {
      alert("please verify that you are a real user");
    }
  };
  getPlaneTypeAndGoToForm = (selectedPlan) => {
    this.setState({
      selectedPlan: `join ${selectedPlan} plan`,
      selectedPlanMessage: `hey i would like to join your ${selectedPlan} plan,
please get back to me`,
    });

    window.location.assign("/#/contact");
  };
  render() {
    return (
      <div className="App">
        <MyNavBar></MyNavBar>
        <SideForm getFormState={this.getFormState}></SideForm>
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>

            <Route exact path="/about" element={<About></About>}></Route>
            <Route
              exact
              path="/contact"
              element={
                <Contact
                  captchaResponse={this.captchaResponse}
                  selectedPlan={this.state.selectedPlan}
                  selectedPlanMessage={this.state.selectedPlanMessage}
                  isRealUser={this.state.isRealUser}
                  verifyCallback={this.verifyCallback}
                  reCaptchaLoded={this.reCaptchaLoded}
                  handleVerified={this.handleVerified}
                  closeGenericModal={this.closeGenericModal}
                  openGenericModal={this.openGenericModal}
                ></Contact>
              }
            ></Route>
            <Route
              exact
              path="/pricing"
              element={
                <Pricing
                  getPlaneTypeAndGoToForm={this.getPlaneTypeAndGoToForm}
                  pageType={this.state.pricePageType}
                  windowWidth={this.state.windowWidth}
                >
                  pricing
                </Pricing>
                ///pricing pages types - boxes
              }
            ></Route>
          </Routes>
          <GenericModal
            bottom={this.state.modalBottom}
            top={this.state.modalTop}
            text={this.state.modalText}
            closeModal={this.closeGenericModal}
            isDiscountModalOpen={this.state.isGenericModalOpen}
          ></GenericModal>
        </HashRouter>
      </div>
    );
  }
}
