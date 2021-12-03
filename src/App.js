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
import { mokeUp, shake } from "./components/utils";
import SideForm from "./components/SideForm";
// init("user_luCcUIntINSgugJfQeWCK");
// import emailjs from 'emailjs-com';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideFormOpen: true,
      color: "",
      fontSize: "",
      background: "",
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
      pricePageHeadline: { fontSize: "", color: "" },
      priceBoxHeadline: { fontSize: "", color: "", background: "" },
      priceBox: { background: "" },
      selectedElement: "priceBoxHeadline",
      pricePageBackground: { background: "" },
      // pricingBoxesBackground: "",
      // pricingBoxesHeadline: "",
      // pricingBoxesPrice: "",
      // navBarBackgroundColor: "",
      // navBarFontColor: "",
    };
  }
  shake = (className) => {
    return ` ${this.props.selectedElement === className ? shake : ""}`;
  };

  toggleToolsBar = () => {
    if (this.state.sideFormOpen === true) {
      this.setState({ sideFormOpen: false });
    } else {
      this.setState({ sideFormOpen: true });
    }
  };
  selectElement = (elementName) => {
    this.setState({ selectedElement: elementName });
  };
  deepEqual = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = this.isObject(val1) && this.isObject(val2);
      if (
        (areObjects && !this.deepEqual(val1, val2)) ||
        (!areObjects && val1 !== val2)
      ) {
        return false;
      }
    }
    return true;
  };
  isObject = (object) => {
    return object != null && typeof object === "object";
  };
  changeElementColor = (atribute) => {
    console.log(atribute);
    this.setState((state) => ({
      ...state,
      [state.selectedElement]: {
        ...state[state.selectedElement],
        [atribute]: this.state[atribute],
      },
    }));
    console.log(this.state[this.state.selectedElement]);
  };
  getState = (state, value) => {
    this.setState({ [state]: value });
  };
  setLocalStorageGenericColor = () => {
    Object.entries(this.state).forEach((state) => {
      console.log(JSON.stringify(state[1]));

      localStorage.setItem(state[0], JSON.stringify(state[1]));
    });
  };
  changeElementValue = (prevState, atribute) => {
    if (this.state[atribute] !== prevState[atribute]) {
      this.changeElementColor(`${atribute}`);
      // this.setLocalStorageGenericColor();
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    this.changeElementValue(prevState, "color");
    this.changeElementValue(prevState, "fontSize");
    this.changeElementValue(prevState, "background");

    // if (this.state.color !== prevState.color) {
    //   this.changeElementColor("color");
    // }
    // if (this.state.fontSize !== prevState.fontSize) {
    //   console.log(this.state.fontSize);
    //   this.changeElementColor("fontSize");
    // }
    // this.changeElementValue(prevState, "color");
    if (this.deepEqual(this.state, prevState) === false) {
      this.setLocalStorageGenericColor();
    }
  };
  getFormState = (event, state) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = (event) => {
    this.updateDimensions();

    this.setState({ [event.target.name]: event.target.value });
  };
  updateDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };
  setStateFromStorage = () => {
    console.log(this.state);
    Object.keys(this.state).forEach((state) => {
      let value = localStorage.getItem(state);
      console.log(value);
      value = JSON.parse(value);

      // if (state === "isGenericModalOpen") {
      //   value = false;
      // }
      this.setState({ [state]: value });
    });
  };
  componentDidMount() {
    localStorage.removeItem("state");
    // this.setStateFromStorage();
    // let state = localStorage.getItem("state");

    // Object.entries(JSON.parse(state)).forEach((state) => {

    // });
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
  reCaptchaLoded = () => {};
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
    console.log(this.state.fontSize);
    return (
      <div className="App">
        <MyNavBar
        // navBarBackgroundColor={this.state.navBarBackgroundColor}
        // navBarFontColor={this.state.navBarFontColor}
        ></MyNavBar>
        <SideForm
          pricePageBackground={this.state.pricePageBackground}
          priceBox={this.state.priceBox}
          priceBoxHeadline={this.state.priceBoxHeadline}
          toggleToolsBar={this.toggleToolsBar}
          sideFormOpen={this.state.sideFormOpen}
          selectedElement={this.state.selectedElement}
          pricePageHeadline={this.state.pricePageHeadline}
          getState={this.getState}
          handleChange={this.handleChange}
        ></SideForm>
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
                  pricePageBackground={this.state.pricePageBackground}
                  priceBox={this.state.priceBox}
                  priceBoxHeadline={this.state.priceBoxHeadline}
                  pricePageHeadline={this.state.pricePageHeadline}
                  shake={this.shake}
                  selectedElement={this.state.selectedElement}
                  selectElement={this.selectElement}
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
