import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="container-fluid p-0  mt-2">
                <div className="row pl-4">
                    <div className="logoContainer col-4 mt-auto mb-auto">
                        <Link className="navbar-brand" to="/">Business Travel Advisor</Link>
                    </div>
                    <div className="col-8 mt-auto mb-auto">
                        <Link className="mr-2" to="/">Home</Link>
                        <Link className="mr-2 ml-2" to="/different_countries">Different Countries</Link>
                        <Link className="mr-2 ml-2" to="/accommodation">Accommodation</Link>
                        <Link className="mr-2 ml-2" to="/enjoy_travel">Enjoy Travel</Link>
                        <Link className="mr-5 ml-2" to="/feedbacks">Feedbacks</Link>
                        <Link className="ml-5" to="/sign_up">Sign Up</Link>
                        <Link className="ml-5" to="/sign_in">Sign In</Link>
                    </div>
                </div>
            </nav>
        )
    }
}
