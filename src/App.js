import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import NavbarMenu from './components/Navbar/NavbarMenu';
import Home from './components/Navbar/NavbarItems/Home';
import DiffCountries from './components/Navbar/NavbarItems/DiffCountries';
import DiffCountriesTwo from './components/Navbar/NavbarItems/DiffCountriesTwo';
import Accommodation from './components/Navbar/NavbarItems/Accommodation';
import EnjoyTravel from './components/Navbar/NavbarItems/EnjoyTravel';
import Feedbacks from './components/Navbar/NavbarItems/Feedbacks';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarMenu />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/different_countries" component={DiffCountries} />
            {/* <Route path="/different_countries" component={DiffCountriesTwo} /> */}
            <Route path="/accommodation" component={Accommodation} />
            <Route path="/enjoy_travel" component={EnjoyTravel} />
            <Route path="/feedbacks" component={Feedbacks} />
            <Route path="/sign_up" component={RegistrationForm} />
            <Route path="/sign_in" component={LoginForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

