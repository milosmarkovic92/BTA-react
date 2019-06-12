import React, { Component } from 'react';
// komponenta za input polje
import Input from './FormDetails/Input';
// Link komponenta iz react-routera koja menja <a>
import { Link } from 'react-router-dom';
// Button komponenta uvezena iz bootstrapa "npm i react-bootstrap"
import Button from 'react-bootstrap/Button';

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            // objekat fields u kom skladistim podatke iz input polja
            fields: {},
            // objekat errors u kom skladistim error poruke
            errors: {},
            // uslov za redirekciju
            redirect: false
        }
    }

    // metoda koja pprikuplja podatke iz inputa i smesta ih u objekat fields unutar state-a
    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    // metoda koja se poziva submitovanjem forme
    submitUserLoginForm = (e) => {
        // dohvatam iz localStorage vrednosti za email i firstName i smestam u promenljive
        let storedEmail = localStorage.getItem('email');
        let storedName = localStorage.getItem('firstName');
        e.preventDefault();
        // ispitujem validaciju pozivom metode validateForm()
        if (this.validateForm()) {
            let fields = {};
            fields["email"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            // provera postojeceg i unetog emaila
            if (storedEmail === this.state.fields.email) {
                localStorage.setItem('email', this.state.fields.email);
                // ako je postojeci, dozvoli mu redirect
                this.setState({
                    redirect: true
                })
                // postojeci email ulogovanog usera prosledi kao parametar funkciji onLogin koja se nalazi u App.js
                this.props.onLogin(storedEmail, storedName);
            }
            alert("Welcome, " + storedName);
            // console.log(this.state.fields);
        }
    }
    // validacija inputa login forme
    validateForm = () => {
        let storedEmail = localStorage.getItem('email');
        let storedPass = localStorage.getItem('password');
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
            //reg exp za email
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

        if (storedPass !== this.state.fields.password) {
            formIsValid = false;
            errors["password"] = "*Password does not match."
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
                        {/* error poruka je sakrivena sve dok uslov nije ispunjen */}
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
                        <div className="mt-4">
                            <p className="haveAcc">Don't have account yet? -</p>
                            <Link to="/sign_up">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
