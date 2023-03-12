import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {

  return (
    <>
        <Navbar collapseOnSelect bg="light" expand="sm" className="mb-3">
          <Container>
            <Navbar.Brand>Rebecca Girndt</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto justify-content-end flex-grow-1">
                  <Link className='nav-link' to='/'>About</Link>
                  <Link className='nav-link' to='/projects'>Projects</Link>
                  <Link className='nav-link' to="/contact">Contact</Link>
                  <Link className='nav-link' to="/resume">Resume</Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     {/* <Nav className="justify-content-end">
        <Nav.Item>
          <Link to="/">About</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/projects">Projects</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact">Contact</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/resume">Resume</Link>
        </Nav.Item>
      </Nav> */}
    </>
  );
}

export default Header;