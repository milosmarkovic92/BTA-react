import React, { Component } from 'react';
import Input from './FormDetails/Input';
import {Redirect} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            email: '',
            errors: {},
            redirect: false
        }
    }

    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submitUserLoginForm = (e) => {
        let storedEmail = localStorage.getItem('email');
        let storedName = localStorage.getItem('firstName');
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["email"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            if(storedEmail === this.state.fields.email) {
                localStorage.setItem('email', this.state.fields.email);
                this.setState({
                  redirect: true
                })
              }
                alert("Welcome, " + storedName);
            // console.log(this.state.fields);
        }
    }

    validateForm = () => {
        let storedEmail = localStorage.getItem('email');
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email.";
        }

        if (storedEmail !== this.state.fields.email) {
            formIsValid = false;
            errors["email"] = "*Email does not exist.";
        }

        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render() {
        return (
            <div>
                <div id="login">
                    <h3>Sign In Here</h3>
                    <form method="post" name="userLoginForm" onSubmit={this.submitUserLoginForm} >
                        <Input
                            label="Email*"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.fields.email}
                        />
                        {this.state.errors ?
                            <p className="errorMsg">{this.state.errors.email}</p> :
                            null
                        }
                        <Input
                            type="password"
                            label="Password*"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.fields.password}
                        />
                        {this.state.errors ?
                            <p className="errorMsg">{this.state.errors.password}</p> :
                            null
                        }
                        <Button type="submit">Sign In</Button>
                        {
                            this.state.redirect ?
                                <Redirect to="/home" /> :
                                null
                        }
                    </form>
                </div>
            </div>
        )
    }
}
