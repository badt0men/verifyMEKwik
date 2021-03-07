import React from 'react';
import { Navbar } from 'react-bootstrap';


class Footer extends React.Component{
    render(){
        return (<div><Navbar className="footer" fixed="bottom">
        <Navbar.Text>&copy; 2020. VerifyMEkwik.ng Limited. All Rights Reserved.</Navbar.Text>
    </Navbar></div>)
    }
}

export default Footer;