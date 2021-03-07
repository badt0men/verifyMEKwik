import React from 'react';
// import {FormGroup} from 'react-bootstrap';
// import {ControlLabel, HelpBlock} from 'react-router-bßootstrap';
import Form from 'react-bootstrap/Form';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

var DatePicker = require("react-bootstrap-date-picker");

var App = React.createClass({
  getInitialState: function(){
    var value = new Date().toISOString();
    return {
      value: value
    }
  },
  handleChange: function(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    });
  },
  componentDidUpdate: function(){
    // Access ISO String and formatted values from the DOM.
    var hiddenInputElement = document.getElementById("example-datepicker");
    console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
    console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
  },
  render: function(){
    return <Form.Group>
      <Form.Label>Label</Form.Label>
      <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
      {/* <HelpBlock>Help</HelpBlock> */}
    </Form.Group>;
  }
});

