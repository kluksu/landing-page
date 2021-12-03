import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { BlockPicker, ChromePicker, SketchPicker } from "react-color";

export default class SideForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#fff",
      background: "#fff",
    };
  }
  componentDidUpdate(prevProps, PrevState) {
    if (this.state.color !== PrevState.color) {
      this.props.getState("color", this.state.color);
    }
    if (this.state.background !== PrevState.background) {
      this.props.getState("background", this.state.background);
    }
  }

  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
  };
  handleChangeCompleteBackground = (background) => {
    this.setState({ background: background.hex });
  };
  render() {
    let selectedElementAtributes = Object.keys(
      this.props[this.props.selectedElement]
    );
    let backgroundScheme = selectedElementAtributes.includes("background") ? (
      <ChromePicker
        color={this.state.background}
        onChange={this.handleChangeCompleteBackground}
      />
    ) : null;
    let fontScheme = selectedElementAtributes.includes("color") ? (
      <ChromePicker
        color={this.state.color}
        onChange={this.handleChangeComplete}
      />
    ) : null;

    let sideFormOpen = this.props.sideFormOpen === true ? "sideFormOpen" : "";
    let sideFormToggleButton =
      this.props.sideFormOpen === true ? (
        <Button onClick={this.props.toggleToolsBar} variant="danger">
          {" "}
          don't hold
        </Button>
      ) : (
        <Button onClick={this.props.toggleToolsBar}> hold open</Button>
      );
    let hundredSizes = [];
    for (let index = 0; index < 100; index++) {
      const number = hundredSizes[index];
      hundredSizes.push(<option value={`${index}px`}>{index}</option>);
    }
    let pricePageHeadlineOptionsArr = Object.keys(
      this.props[this.props.selectedElement]
    ).map((atribute) => {
      return <option value={atribute}>{`${atribute}`}</option>;
    });
    let fontSizeForm = selectedElementAtributes.includes("fontSize") ? (
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> font size</Form.Label>
        <Form.Select
          aria-label="Default select example"
          type="select"
          name="fontSize"
          onChange={(event) => this.props.handleChange(event)}
        >
          {hundredSizes}{" "}
        </Form.Select>
      </Form.Group>
    ) : null;
    return (
      <div className={` sideForm ${sideFormOpen}  `}>
        <Form>
          {sideFormToggleButton}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select
              aria-label="Default select example"
              type="select"
              name="pricePageType"
              onChange={(event) => this.props.handleChange(event)}
            >
              <option value="boxes">boxes</option>
              <option value="table">table</option>
            </Form.Select>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="select"
              name="pricePageType"
              onChange={() => this.props.getFormState}
            />
            <option value="boxes">boxes</option>
            <option value="table">table</option>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group> */}
          choose elemnt to change
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select
              aria-label="Default select example"
              type="select"
              name="selectedElement"
              value={this.props.selectedElement}
              onChange={(event) => this.props.handleChange(event)}
            >
              <option value={"pricePageHeadline"}> price page headline</option>
              <option value={"priceBoxHeadline"}> price box headline</option>
              <option value={"priceBox"}> price box background</option>
              <option value={"pricePageBackground"}>
                {" "}
                price page background
              </option>{" "}
              <option value={"pricePagePrice"}> price page price</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select
              aria-label="Default select example"
              type="select"
              name="selectedAtribute"
              onChange={(event) => this.props.handleChange(event)}
            >
              {pricePageHeadlineOptionsArr}{" "}
            </Form.Select>
          </Form.Group>
          {fontSizeForm}
          color
          {fontScheme}
          background color
          {backgroundScheme}
        </Form>
      </div>
    );
  }
}
