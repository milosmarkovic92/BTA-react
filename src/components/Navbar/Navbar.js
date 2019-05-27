import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="container-fluid p-0">
                <div className="row pl-4 d-flex justify-content-center">
                    <div className=" col-md-9 col-lg-9 col-xl-9 d-flex justify-content-start mt-3">
                        <Link className=" mt-n1 logo font-weight-bold mr-md-2 mr-lg-4 mr-xl-5 pr-md-2 pl-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-3" to="/">BTA</Link>
                        <NavLink exact activeClassName={"active"} className="pr-md-2 pr-lg-3 pr-xl-4" to="/">Home</NavLink>
                        <NavLink className="pr-md-2 pl-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-4" to="/different_countries">Different Countries</NavLink>
                        <NavLink className="pr-md-2 pl-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-4" to="/accommodation">Accommodation</NavLink>
                        <NavLink className="pr-md-2 pl-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-4" to="/enjoy_travel">Enjoy Travel</NavLink>
                        <NavLink className="pr-md-2 pl-md-2 pr-lg-3 pl-lg-3 pr-xl-4 pl-xl-4" to="/feedbacks">Feedbacks</NavLink>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 d-flex justify-content-center mt-3">
                        <NavLink className="pr-md-2 pr-lg-3 pr-xl-4" to="/sign_up">Sign Up</NavLink>
                        <NavLink className="pl-md-2 pl-lg-3 pl-xl-4" to="/sign_in">Sign In</NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}
