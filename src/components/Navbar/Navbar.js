import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar p-0 ml-3 mr-3 mt-2">
                <div className="logoContainer ml-5">
                   <Link className="navbar-brand mt-0" to="/">Business Travel Advisor</Link>
                </div>
                <div className="container d-flex justify-content-end">
                    <Link className="mr-2" to="/">Home</Link>
                    <Link className="mr-2 ml-2" to="/different_countries">Different Countries</Link>
                    <Link className="mr-2 ml-2" to="/accommodation">Accommodation</Link>
                    <Link className="mr-2 ml-2" to="/enjoy_travel">Enjoy Travel</Link>
                    <Link className="mr-5 ml-2" to="/feedbacks">Feedbacks</Link>
                    <Link className="ml-5" to="/register">Register</Link>
                </div>
            </nav>
        )
    }
}
