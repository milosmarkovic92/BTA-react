import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

export default class NavbarMenu extends Component {
    render() {
        // prihvatio sam props iz App.js
        const { isLoggedIn } = this.props;
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                {/* ako je user logovan, prikazi mi link u navigaciji */}
                {isLoggedIn && (
                    <NavLink
                        activeClassName={"active"}
                        exact to="/"
                        className="ml-3 logo font-weight-bold mt-n1 mr-5">
                        BTA
                    </NavLink>
                )}
                {/* ako je user logovan, prikazi mi link u navigaciji */}
                {isLoggedIn && (
                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        <div className="oreo-container">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Navbar.Toggle>
                )}

                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* ako je user logovan, prikazi mi link u navigaciji */}
                    {isLoggedIn && (
                        <Nav className="mr-auto">
                            {/* <NavLink exact activeClassName={"active"} className="pr-md-2 pr-lg-3 pr-xl-4" to="/">Home</NavLink> */}
                            <NavLink className="pr-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-4" to="/different_countries">Life In Different Countries</NavLink>
                            <NavLink className="pr-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-4" to="/accommodation">Choose the Best Accommodation</NavLink>
                            <NavLink className="pr-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-4" to="/enjoy_travel">Enjoy Your Travel</NavLink>
                            <NavLink className="pr-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-4" to="/feedbacks">Feedbacks</NavLink>
                        </Nav>
                    )}
                    {isLoggedIn && (
                        <Nav className="mr-3">
                            <NavLink className="pr-md-2 pr-lg-3 pr-xl-4" to="">Traveler - {this.props.logedUser}</NavLink>
                            <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in" onClick={this.props.logout}>Sign Out</NavLink>
                        </Nav>
                    )}
                    {/* ako user nije logovan, prikazi mi link u navigaciji */}
                    {!isLoggedIn && (
                        <Nav className={!isLoggedIn ? "d-flex justify-content-center w-100" : "mr-3"}>
                            <NavLink className="pr-md-2 pr-lg-3 pr-xl-4" to="/sign_up">Sign Up</NavLink>
                            <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in">Sign In</NavLink>
                        </Nav>
                    )}

                </Navbar.Collapse>
            </Navbar>
        )
    }
}
