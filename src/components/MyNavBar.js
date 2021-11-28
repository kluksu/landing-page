import React, { Component } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default class MyNavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/#/">Home</Nav.Link>
        <Nav.Link href="/#/about">about</Nav.Link>
        <Nav.Link href="/#/pricing">pricing</Nav.Link>
        <Nav.Link href="#features">about</Nav.Link>
        <Nav.Link href="/#/contact">contact us</Nav.Link>
        
        
         
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        )
    }
}
