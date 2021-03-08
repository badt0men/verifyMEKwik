/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Card, Col, Container, Row} from 'react-bootstrap';
import Sidemenu from '../components/Sidemenu';
import {NIN, FormData} from './Forms'; 
import logo from '../assets/images/logo.png';


function AboutIcon(){
    return (<img src={logo} height="150px" alt="About Icon" className="about-img"/>);
}

function AboutText(){
    const height = {
        height: '270px',
    }
    return (<>
        <div className="alt-bg rounded-img " style={height}>
        <div className="content">
            <h3>NIN Data Verification</h3>
            <p>The National Identity Management Commission (NIMC) established by the NIMC Act No. 23 of 2007, the NIMC has the mandate to establish, own, operate, maintain and manage the National Identity Database in Nigeria, register persons covered by the Act, assign a Unique National Identification Number (NIN) and issue General Multi-Purpose Cards (GMPC) to those who are citizens of Nigeria as well as others legally residing within the country.</p>
            
        </div>
        </div>
        
    </>)
}


const hide = {
    display: 'none',
}

class NINpage extends React.Component{

    render(){
        return (<>
            <Header/>
                <Container>
                    <div className="mg-top-110"></div>
                    <Row>
                    <Col md={1}> 

                    </Col>
                    <Col md={4}> 
                        <Card className="yel-bg" >
                            <Card.Body>
                            <AboutIcon />
                            <br />
                            <Sidemenu />
                                    
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col md={6}>
                    <Col>
                        <AboutText />
                        <br/>
                       <Card className="yel-bg">
                            <Card.Body>
                            <NIN/>
                                    
                            </Card.Body>
                        </Card>
                      </Col>
                      
                       
                    </Col>
                    </Row>
                    <div className="mg-bt-110"></div>
                </Container>
            <Footer/>
        </>)
    }
}

export default NINpage;