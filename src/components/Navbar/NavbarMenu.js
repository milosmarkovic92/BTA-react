import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

export default class NavbarMenu extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavLink exact activeClassName={"active"} to="/home" className="ml-3 logo font-weight-bold mt-n1 mr-5">BTA</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <div className="oreo-container">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <NavLink exact activeClassName={"active"} className="pr-md-2 pr-lg-3 pr-xl-4" to="/">Home</NavLink> */}
                        <NavLink className="pr-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-4" to="/different_countries">Life In Different Countries</NavLink>
                        <NavLink className="pr-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-4" to="/accommodation">Choose the Best Accommodation</NavLink>
                        <NavLink className="pr-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-4" to="/enjoy_travel">Enjoy Your Travel</NavLink>
                        <NavLink className="pr-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-4" to="/feedbacks">Feedbacks</NavLink>
                    </Nav>
                    <Nav className="mr-3">
                        <NavLink className="pr-md-2 pr-lg-3 pr-xl-4" exact to="/">Sign Up</NavLink>
                        <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in">Sign In</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
