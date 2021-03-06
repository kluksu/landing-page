import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class GenericModal extends Component {
  render() {
    return (
      <div>
        <>
          <Modal
            show={this.props.isDiscountModalOpen}
            onHide={this.props.closeModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>{this.props.top}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.props.text}</Modal.Body>
            <Modal.Footer>
              {this.props.bottom}
              <Button variant="primary" onClick={this.props.closeModal}>
                סגור
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}
