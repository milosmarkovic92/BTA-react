import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StepsHolder from './components/StepsHolder';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Navbar/NavbarItems/Home';
import DiffCountries from './components/Navbar/NavbarItems/DiffCountries';
import Accommodation from './components/Navbar/NavbarItems/Accommodation';
import EnjoyTravel from './components/Navbar/NavbarItems/EnjoyTravel';
import Feedbacks from './components/Navbar/NavbarItems/Feedbacks';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/different_countries" component={DiffCountries} />
            <Route path="/accommodation" component={Accommodation} />
            <Route path="/enjoy_travel" component={EnjoyTravel} />
            <Route path="/feedbacks" component={Feedbacks} />
            <Route path="/register" component={StepsHolder} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

