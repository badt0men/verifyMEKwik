/* eslint-disable no-unused-vars */
//Headrr Componenet
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer} from "react-router-bootstrap"; 

import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../assets/images/logo.png';

function Logo(){
    return (<img src={logo} alt="logo" className="logo"/>); 
}

class Header extends React.Component{
    render(){
        return (<>
            <Navbar className="default" collapseOnSelect expand="lg" fixed="top">
                <Container fluid className="nav-w">
                <Navbar.Brand href="/" className="logoText"><Logo /> <logo>VerifyMEKwik</logo></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    
                    </Nav>
                    <Nav className="justify-content-end menu">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                    <Nav.Link to="/about">about</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/services">
                    <Nav.Link to="/services">Services</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                    <Nav.Link to="#contact">Contact</Nav.Link>
                    </LinkContainer>
                    {/* <Link to="/" className="nav-link" >Home</Link>

                    <Link to="/about" className="nav-link" >About</Link>

                    <Link to="/services" className="nav-link" >Services</Link>

                    <Link to="/contact" className="nav-link" >Contact</Link> */}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Routes /> */}
            </>)
    }
}

export default Header;