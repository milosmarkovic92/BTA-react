import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import NavbarMenu from './components/Navbar/NavbarMenu';
import Home from './components/Navbar/NavbarItems/Home';
import DiffCountries from './components/Navbar/NavbarItems/DiffCountries';
// import DiffCountriesTwo from './components/Navbar/NavbarItems/DiffCountriesTwo';
import Accommodation from './components/Navbar/NavbarItems/Accommodation';
import EnjoyTravel from './components/Navbar/NavbarItems/EnjoyTravel';
import Feedbacks from './components/Navbar/NavbarItems/Feedbacks';
import NotFound from './components/NotFound';
import './App.css';

// const loggedUser = localStorage.getItem('email');

export default class App extends Component {
  state = {
    // user je undefined po defaultu sve dok ne prodje log in
    user: undefined,
    userName: ''
  }

  componentDidMount = () => {
    const userName = localStorage.getItem('firstName');
    if(userName) {
      this.setState({
        user: userName,
        userName
      })
    }
  }

  handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("password");
    this.setState({ 
      user: undefined,
      userName: ''
    });
  };

  // login funkcija koja prihvata parametar iz LoginForm.js (storedEmail)
  onLogin = (storedEmail, storedName) => {
    this.setState({
      // user nije undefined vec je storedEmail
      user: storedEmail,
      userName: storedName
    })
  }

  render() {
    // ovde vadim user iz state-a
    const isLoggedIn = this.state.user;
    return (
      // Fragment zato sto sam BrowserRouter iscupao u index.js i mora biti obmotana komponenta
      <Fragment>
        {/* prosledjujem kao props user-a iz state-a */}
        <NavbarMenu isLoggedIn={isLoggedIn} logedUser={this.state.userName} logout={this.handleLogout}/>
        <div className="App">
          <Switch>
            <Route exact path="/" component={() => isLoggedIn ?
              <Home /> :
              <Redirect to={'/sign_in'} />}
            />
            <Route path="/different_countries" component={() => isLoggedIn ?
              <DiffCountries /> :
              <Redirect to={'/sign_in'} />}
            />
            {/* <Route path="/different_countries" component={DiffCountriesTwo} /> */}
            <Route path="/accommodation" component={() => isLoggedIn ?
              <Accommodation /> :
              <Redirect to={'/sign_in'} />}
            />
            <Route path="/enjoy_travel" component={() => isLoggedIn ?
              <EnjoyTravel /> :
              <Redirect to={'/sign_in'} />}
            />
            <Route path="/feedbacks" component={() => isLoggedIn ?
              <Feedbacks /> :
              <Redirect to={'/sign_in'} />}
            />
            <Route path="/sign_up" component={RegistrationForm} />
            {/* razradjena logika da ako je logovan user odradi redirect na home; ako nije, ostaje na sign inu */}
            <Route path="/sign_in" component={() => isLoggedIn ?
              <Redirect to={'/'} /> :
              <LoginForm onLogin={this.onLogin} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

