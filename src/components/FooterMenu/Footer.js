import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default class Footer extends Component {
    render() {
        // prihvatio sam props iz App.js
        const { isLoggedIn } = this.props;
        return (
            <div className="footerWrapper">
                <div className="d-flex justify-content-center ">
                    {isLoggedIn && (
                        <Nav className="mr-5">
                            <Link className="pl-lg-3 pl-xl-4 linkIcons" to="/sign_in"><FaFacebookSquare /></Link>
                            <Link className="pl-lg-3 pl-xl-4 linkIcons" to="/sign_in"><FaInstagram /></Link>
                            <Link className="pl-lg-3 pl-xl-4 linkIcons" to="/sign_in"><FaGithub /></Link>
                            <Link className="pl-lg-3 pl-xl-4 linkIcons" to="/sign_in"><FaLinkedin /></Link>
                        </Nav>
                    )}
                    {isLoggedIn && (
                        <Nav className="ml-5">
                            <Link className="pr-md-2 pr-lg-3 pr-xl-4 d-flex align-items-center linkText" to="">Traveler - {this.props.logedUser}</Link>
                            <Link className="pl-lg-3 pl-xl-4 d-flex align-items-center linkText" to="/sign_in" onClick={this.props.logout}>Sign Out</Link>
                        </Nav>
                    )}
                </div>
                <div className="copyRightText text-center py-3">© 2019 Copyright</div>
            </div>
        )
    }
}