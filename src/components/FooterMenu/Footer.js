import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        // prihvatio sam props iz App.js
        const { isLoggedIn } = this.props;
        return (
            // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            //     {/* ako user nije logovan, prikazi mi link u navigaciji */}
            //     <Nav className="mr-3">
            //         <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in"><FaFacebookSquare /></NavLink>
            //         <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in"><FaInstagram /></NavLink>
            //         <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in"><FaGithub /></NavLink>
            //         <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in"><FaLinkedin /></NavLink>
            //     </Nav>
            //     <Nav className>
            //         Copyright <FaCopyright/> 2019, SN-iMP
            //     </Nav>
            //     {isLoggedIn && (
            //         <Nav className="mr-3">
            //             <NavLink className="pr-md-2 pr-lg-3 pr-xl-4" to="">Traveler - {this.props.logedUser}</NavLink>
            //             <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in" onClick={this.props.logout}>Sign Out</NavLink>
            //         </Nav>
            //     )}

            // </Navbar>
            <footer className="page-footer font-small cyan darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="mb-5 d-flex justify-content-center ">
                                {isLoggedIn && (
                                    <Nav className="mr-5">
                                        <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in"><FaFacebookSquare /></NavLink>
                                        <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in"><FaInstagram /></NavLink>
                                        <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in"><FaGithub /></NavLink>
                                        <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in"><FaLinkedin /></NavLink>
                                    </Nav>
                                )}
                                {isLoggedIn && (
                                    <Nav className="ml-5">
                                        <NavLink className="pr-md-2 pr-lg-3 pr-xl-4" to="">Traveler - {this.props.logedUser}</NavLink>
                                        <NavLink className="pl-lg-3 pl-xl-4" to="/sign_in" onClick={this.props.logout}>Sign Out</NavLink>
                                    </Nav>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2019 Copyright: SN - iMP </div>
            </footer>
        )
    }
}
