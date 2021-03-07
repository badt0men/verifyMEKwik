import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Form, Card, Col, Container, Jumbotron, Row, Button} from 'react-bootstrap';

function Heading(){
    return (<Jumbotron className="jumbo">
                <p>Request your services</p>
            </Jumbotron>
            );
}

function Reqform(){
    return (
            <Form>
                <Form.Group>
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Job/Service Address</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Type of job</Form.Label>
                    <Form.Control as="select" custom>
                        <option selected="">Open this select menu</option>
                        <option>Washing Machine - Installation / Maintenance</option>
                        <option>Borehole - Installation / Maintenance</option>
                        <option>Plumbing - Installation / Maintenance</option>
                        <option>Painting - Maintenance</option>
                        <option>Taila - Installation / Maintenance</option>
                        <option>3D - Installation / Maintenance</option>
                        <option>Wallpaper - Installation / Maintenance</option>
                        <option>P O P - Installation / Maintenance</option>
                        <option>Electrical - Installation / Maintenance</option>
                        <option>AC / Fridge - Installation / Maintenance</option>
                        <option>Cable - Installation / Maintenance</option>
                        <option>Inveter - Installation / Maintenance</option>
                        <option>Roofleak - Maintenance</option>
                    </Form.Control> 
                </Form.Group>
                
                <Button  className="alt-btn" variant="primary" type="submit" block>
                    Request now
                </Button>
            </Form>
    )       ;
}

function Illustration(){
    return (<img src="https://chummy-workers.firebaseapp.com/static/media/slide1.86faf305.gif" height="300px" alt="illustration" className="rounded-img"/>);
}

function Welome(){
    const height = {
        height: '270px',
    }
    return (<>
        <Jumbotron className="alt-bg rounded-img " style={height}>
        <div className="jumbo-content">
            <h1>Services Page</h1>
            <p>This is a simple product & services page</p>
            
            <span className="justify-content-between">
                <a class="btn alt-btn2" href="/services">Services</a>
                <a class="btn alt-btn2" href="/terms">Terms/Conditions</a>
            </span>
        </div>
        </Jumbotron>
    </>)
}


class AboutPage extends React.Component{
    render(){
        return (<>
            <Header/>
                <Container>
                    <div className="mg-top-110"></div>
                    <Row>
                    <Col md={5}> 
                        <Card className="yel-bg">
                            <Card.Body>
                                    <Heading />
                                    <Reqform />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={7}>
                        
                        <Col>
                        <Card className="alt-bg">
                        <Illustration />
                        </Card>
                        <br />
                        <Welome />
                        </Col>
                       
                    </Col>
                    </Row>
                    <div className="mg-bt-110"></div>
                </Container>
            <Footer/>
        </>)
    }
}

export default AboutPage;