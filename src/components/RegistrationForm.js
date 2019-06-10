import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Input from './FormDetails/Input';
import Button from 'react-bootstrap/Button';
import './Components.css';

export default class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      redirect: false,
      error: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitUserRegistrationForm = this.submitUserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submitUserRegistrationForm(e) {
    let storedEmail = localStorage.getItem('email');

    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["firstName"] = "";
      fields["lastName"] = "";
      fields["email"] = "";
      fields["phone"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      localStorage.setItem('firstName', this.state.fields.firstName);
      localStorage.setItem('lastName', this.state.fields.lastName);
      if(storedEmail !== this.state.fields.email) {
        localStorage.setItem('email', this.state.fields.email);
        this.setState({
          redirect: true
        })
        alert("Form submitted");
      }
      // else {
      //   this.setState({
      //     error: true,
      //     redirect: false
      //   })
      // }
      
      // console.log(this.state.fields);
    }

  }

  validateForm() {
    let storedEmail = localStorage.getItem('email');
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your First Name.";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "*Please enter alphabet characters only.";
      }
    }
    
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "*Please enter your Last Name.";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastName"] = "*Please enter alphabet characters only.";
      }
    }
    
    if (!fields["addressOne"]) {
      formIsValid = false;
      errors["addressOne"] = "*Please enter your Address.";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email.";
      }
    }

    if(storedEmail === this.state.fields.email) {
      formIsValid = false;
      errors["email"] = "*Email already taken.";
    }

    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "*Please enter your phone number.";
    }

    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["phone"] = "*Please enter valid phone number.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    
    if (fields["passwordRepeat"] !== fields["password"]) {
        formIsValid = false;
        errors["passwordRepeat"] = "*Passwords do not match.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  
  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <h3>Sign Up Here</h3>
          <form method="post" name="userRegistrationForm" onSubmit={this.submitUserRegistrationForm} >
            <Input  
                label="First Name*" 
                name="firstName" 
                onChange={this.handleChange} 
                value={this.state.fields.firstName}
            />
            {this.state.errors ?
              <p className="errorMsg">{this.state.errors.firstName}</p> :
              null
            }
            <Input  
                label="Last Name*" 
                name="lastName" 
                onChange={this.handleChange} 
                value={this.state.fields.lastName}
            />
            {this.state.errors ?
              <p className="errorMsg">{this.state.errors.lastName}</p> :
              null
            }
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
            <Input 
                type="password" 
                label="Repeat Password*" 
                name="passwordRepeat" 
                onChange={this.handleChange} 
                value={this.state.fields.passwordRepeat}
            />
            {this.state.errors ?
              <p className="errorMsg">{this.state.errors.passwordRepeat}</p> :
              null
            }
            <Input
                label="Address 1*" 
                name="addressOne" 
                onChange={this.handleChange} 
                value={this.state.fields.addressOne}
            />
            {this.state.errors ?
              <p className="errorMsg">{this.state.errors.addressOne}</p> :
              null
            }
            <Input 
                label="Address 2" 
                name="addressTwo" 
                onChange={this.handleChange} 
                value={this.state.fields.addressTwo}
            />
            <p className="errorMsg"></p>
            <Input  
                label="Phone*" 
                name="phone" 
                onChange={this.handleChange} 
                value={this.state.fields.phone}
            />
            {this.state.errors ?
              <p className="errorMsg">{this.state.errors.phone}</p> :
              null
            }
            <Button type="submit">Sign Up</Button>
            {
              this.state.redirect ?
                <Redirect to="/sign_in" /> :
                null
            }
          </form>
        </div>
      </div>

    );
  }
}