/* eslint-disable no-unused-vars */
import React from 'react';
import {Jumbotron, Nav} from 'react-bootstrap';
import { LinkContainer} from "react-router-bootstrap"; 


function Sidemenu(){
    return (<><Jumbotron className="jumbo">
                {/* <p>Welcome to Chummy Works</p> */}

            <Nav className="side-menu menu">
                    <LinkContainer to="/nin">
                        <Nav.Link>Verify NIN</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/bvn">
                    <Nav.Link>Verify BVN</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/passport">
                    <Nav.Link>Int'l Passport</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/frsc">
                    <Nav.Link>Check FRSC</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/vin">
                    <Nav.Link >Check VIN</Nav.Link>
                    </LinkContainer>
                    </Nav>
            </Jumbotron>
            </>);
}

export default Sidemenu;