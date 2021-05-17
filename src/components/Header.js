import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {Link, NavLink } from "react-router-dom";
import { FaShoppingCart} from 'react-icons/fa';

function Head() {
    let user= JSON.parse(localStorage.getItem('user-info'))
    console.warn(user)
    return (

 <div>
<div className="row" >
    <div className="col-md-12">
        
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="#home" className="mx-3">E-Kart</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="col-md-4">
                    <Nav className="mr-auto">
                    <Nav.Link href="/" className="mx-2">Home</Nav.Link>
                    <Nav.Link href="/about-us" className="mx-2">About Us</Nav.Link>
                    <Nav.Link href="/contact-us" className="mx-2">Contact Us</Nav.Link>
                    <NavDropdown title="Category" id="basic-nav-dropdown" className="mx-2">
                        <NavDropdown.Item href="#action/3.1">Fashion</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Electronics</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Grocery</NavDropdown.Item>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    </Nav>
                    </div>
                    <div className="col-md-4 ">
                    <Form inline className="d-flex ">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 mx-2" />
                    <Button variant="outline-light" className="mx-2">Search</Button>
                    </Form>
                    </div>
                   
                    <div inline className="col-md-4">
                     <Nav className="justify-content-end">
                     <NavDropdown title="User">
                     <NavDropdown.Item href="/update-profile">Update Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                            <NavDropdown.Item></NavDropdown.Item>
                        </NavDropdown>
                    <Button variant="outline-light" href="/signup" className="mx-2">SignUp</Button>
                    <Button variant="outline-light" href="/login" className="mx-2" >LogIn</Button>
                     
                    <Button variant="outline-light" href="/cart" className="mx-2"><FaShoppingCart /></Button>
                   
                    </Nav>
                    
                    </div>
                
                </Navbar.Collapse>
                
                
            </Navbar>
            
        
    </div>
 </div>
   </div> 
    );
}
export default Head;
