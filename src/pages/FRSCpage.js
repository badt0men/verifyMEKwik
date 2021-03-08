/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Card, Col, Container, Row} from 'react-bootstrap';
import {FRSC} from './Forms'; 
import logo from '../assets/images/logo.png';
import Sidemenu from '../components/Sidemenu';



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
            <h3>Federal Road Safety Data Verification</h3>
            <p>Chummy Work is a Website/App that provide you an expert techinical services for all your domestic house installation/repairs and maintainace.</p>
            <p>
            ChummyWork deals households materials and also recommend qualily and trusted materials for our customers.
            </p>
            
        </div>
        </div>
        
    </>)
}


class FRSCpage extends React.Component{
    render(){
        return (<>
            <Header/>
                <Container>
                    <div className="mg-top-110"></div>
                    <Row>
                    <Col md={1}> 

                    </Col>
                    <Col md={4}> 
                        <Card className="yel-bg">
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
                            <FRSC/>
                                    
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

export default FRSCpage;