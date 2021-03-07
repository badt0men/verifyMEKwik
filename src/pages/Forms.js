/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Form, Button, Col, Table} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {Card} from 'react-bootstrap';
//import '../DatePicker';
import axios from 'axios';

const title = {
    fontWeight : 700,
    textAlign : 'center',
}



function NIN(){

    const [initForm, setInitForm] = useState({
        firstName : '',
        lastname: '',
        nin: '',
        dob: '',
        email: '',
        isSubmitted: false});

    console.log(initForm.isSubmitted);

    const handleSubmit = (e)=> {
        
        setInitForm({...initForm, [e.target.name]:e.target.value});
        console.log(initForm);
    }


    useEffect(() => {
        const nin = initForm.nin;
        const options = {
            method: 'GET',
            url: 'https://vindecoder.p.rapidapi.com/v1.1/decode_vin',
            params: {vin: nin},
            headers: {
              'x-rapidapi-key': '894b073653msh04277acd862cf10p19b953jsn92d1782094a7',
              'x-rapidapi-host': 'vindecoder.p.rapidapi.com'
            }
          };

        axios.request(options).then(function (response) {
            setInitForm(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [initForm]);



    const apiData = (e) => {

        setInitForm({...initForm, isSubmitted:true});
        console.log(initForm.isSubmitted);

        e.preventDefault();
    }

    
    if(initForm.isSubmitted){
        return (<>
            <h3 style={title}>National Identification Data</h3>

            <Table striped bordered hover responsive>
                <tbody>
                    <tr>
                    <td><small>Firstname: </small><br/>Firstname</td>
                    <td><small>Middlename: </small><br/>Firstname</td>
                    <td><small>Lastname: </small><br/>Firstname</td>
                    </tr>
                    <tr>
                    <td><small>NIN: </small><br/>Firstname</td>
                    <td><small>Date Of Birth: </small><br/>Firstname</td>
                    <td><small>Phone Number: </small><br/>Firstname</td>
                    </tr>
                    <tr>
                    <td><small>Email: </small><br/>Placmedia@gmail.com</td>
                    {/* <td><small>Date Of Birth: </small><br/>Firstname</td>
                    <td><small>Phone Number: </small><br/>Firstname</td> */}
                    </tr>
                </tbody>
            </Table>
        </>
        );
    }else{
    return (<>
        <div>
        <h5 style={title}>Verify your NIN Data Accuracy</h5>
                 
        </div>
            <Form onSubmit={apiData}>
                <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstname" onChange={handleSubmit}  placeholder="First Name"  />
                </Form.Group>
                <Form.Group  as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text"  name="lastname" onChange={handleSubmit} placeholder="Last Name" />
                </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label>NIN</Form.Label>
                    <Form.Control type="text"  name="nin" onChange={handleSubmit}  placeholder="National Identification Number" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>D.O.B</Form.Label>
                    <Form.Control type="date"  name="dob" onChange={handleSubmit}  placeholder="Date of Birth" />
                </Form.Group>
                {/* <DatePicker /> */}
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  name="email"  onChange={handleSubmit} placeholder="Enter email address." />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Button  className="alt-btn" variant="primary" type="submit" block>
                    Verify NIN Data
                </Button>
            </Form>
            <p>{initForm.firstname}</p>
    </>);
    }
}

function BVN(){
    const [initBVN, setBVN] = useState({});

    const handleSubmit = (e) => {
        setBVN({...initBVN, [e.target.name]: e.target.value});
    }

    useEffect(function() {
        const bvn = initBVN.bvn;
        const options = {
            method: 'GET',
            url: 'https://vindecoder.p.rapidapi.com/v1.1/decode_vin',
            params: {vin: bvn},
            headers: {
              'x-rapidapi-key': '894b073653msh04277acd862cf10p19b953jsn92d1782094a7',
              'x-rapidapi-host': 'vindecoder.p.rapidapi.com'
            }
          };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    });

    return (<>
        <div>
        <h5 style={title}>Verify your BVN Data</h5>
        </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>BVN</Form.Label>
                    <Form.Control  type="text" name="bvn" onChange={handleSubmit} placeholder="Bank Verification Number" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  name="email" onChange={handleSubmit} placeholder="Enter email address." />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Button  className="alt-btn" variant="primary" type="submit" block>
                    Verify BVN Data
                </Button>
            </Form>
    </>)       ;
}

function PASSPORT(){
    return (<>
        <div>
        <h5 style={title}>Verify your Int'l Passport Data</h5>
        </div>
            <Form>
                <Form.Group>
                    <Form.Label>Passport Num</Form.Label>
                    <Form.Control type="text" placeholder="Int'l Passport Number" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email address." />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Button  className="alt-btn" variant="primary" type="submit" block>
                    Verify Passport Data
                </Button>
            </Form>
    </>)       ;
}


function FRSC(){
    return (<>
        <div>
        <h5 style={title}>Federal Road Safety Data</h5>
        </div>
            <Form>
                <Form.Group>
                    <Form.Label>Vehicle Plate</Form.Label>
                    <Form.Control type="text" placeholder="Enter vehicle plate number" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email address." />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Button  className="alt-btn" variant="primary" type="submit" block>
                    Verify FRSC Data
                </Button>
            </Form>
    </>)       ;
}

function VIN(){
    return (<>
        <div>
        <h5 style={title}>Voter's verification Data</h5>
        </div>
            <Form>
                <Form.Group>
                    <Form.Label>VIN</Form.Label>
                    <Form.Control type="text" placeholder="VIN : Voters Identification Number" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email address." />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Button  className="alt-btn" variant="primary" type="submit" block>
                    Verify Voter's Data
                </Button>
            </Form>
    </>)       ;
}

export {NIN, BVN, PASSPORT, FRSC, VIN};