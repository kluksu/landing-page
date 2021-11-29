import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class SideForm extends Component {
  render() {
    return (
      <div className="sideForm">
        <Form>
          <Form.Select
            aria-label="Default select example"
            type="select"
            name="pricePageType"
            onChange={(event) => this.props.getFormState(event)}
          >
            <option value="boxes">boxes</option>
            <option value="table">table</option>
          </Form.Select>
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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
