import React, { Component } from "react";
import "./NavbarItems.css";

export default class DiffCountries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      trenutniUser: [],
      contacts: [],
      phoneChecked: [],
      websiteChecked: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  onChangeHandler = event => {
    //za selektovani id fetchovati podatke, nakon toga setovati u state

    fetch("http://nationnebojsa-001-site1.gtempurl.com/api/cities/" + event.target.value, {
      method: 'GET',
      headers: {
        "X-API-KEY": "my-secret-key"
      }
    })
      .then(response => response.json())
      .then(parsedJSON => {
        this.setState({ trenutniUser: parsedJSON });
      })
      .catch(error => console.log("error is: ", error));
  };

  checkPhoneItem = (e) => {
    const {checked} = e.target;
    fetch("https://jsonplaceholder.typicode.com/users/" + e.target.value)
    .then(response => response.json())
    .then(parsedJSON => 
      
      {
      checked ?
      this.setState({ phoneChecked: parsedJSON }) :
      this.setState({phoneChecked: []})
    }
    )

    .catch(error => console.log("error is: ", error));
  }

  checkWebsiteItem = (e) => {
    const {checked} = e.target;
    fetch("http://nationnebojsa-001-site1.gtempurl.com/api/cities/" + e.target.value)
    .then(response => response.json())
    .then(parsedJSON => 
      
      {
      checked ?
      this.setState({ websiteChecked: parsedJSON }) :
      this.setState({websiteChecked: []})
    }
    )

    .catch(error => console.log("error is: ", error));
  }

  fetchData() {
    fetch("http://nationnebojsa-001-site1.gtempurl.com/api/countries", {
      method: 'GET',
      headers: {
        "X-API-KEY": "my-secret-key"
      }
    })
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.map(user => ({
          id: `${user.id}`,
          countryName: `${user.countryName}`,
          cityName: `${user.cityName}`
        }))
      )
      .then(contacts =>
        this.setState({
          contacts,
          isLoading: false
        })
      )
      .catch(error => console.log("error is: ", error));
  }

  render() {
    const { contacts } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="filter-container col-8 mt-5">
            <div className="filters">
              {/* ovde bi selekti trebali da se razbiju u komponente */}
              
              <select 
                className="select" 
                defaultValue="user" 
                onChange={this.onChangeHandler}>
                <option disabled value="user">
                  Select country
                </option>
                {contacts.map(contact => {
                  const { countryName, id } = contact;
                  return (
                    <option key={id} value={id}>
                      {countryName}
                    </option>
                  );
                })}
              </select>
              <select className="select">
                {this.state.trenutniUser !== undefined ? (
                  <option value="">{this.state.trenutniUser.cityName}</option>
                ) : null}
              </select>
              {/* {contacts && (
  <select name="city" defaultValue="city">
    <option disabled value="city">
      Select city
    </option>
    {this.state.trenutniUser.map(item => (
      <option key={item.id} value={item.id}>
        {item.cityName}
      </option>
    ))}
  </select>
)} */}
              <select className="select">
                {this.state.trenutniUser !== undefined ? (
                  <option value="">{this.state.trenutniUser.username}</option>
                ) : null}
              </select>
              <div className="select">
                <input className="checkbox" type="checkbox" 
                  value={this.state.trenutniUser.id}
                  onClick={this.checkPhoneItem}
                  />
                <label className="mr-3" htmlFor="">
                  Local Transport
                </label>
                <input className="checkbox" type="checkbox" 
                  value={this.state.trenutniUser.id}
                  onClick={this.checkWebsiteItem}/>
                <label className="mr-3" htmlFor="">
                  Entertainment
                </label>
                <input className="checkbox" type="checkbox" />
                <label className="mr-3" htmlFor="">
                  Safety
                </label>
                <input className="checkbox" type="checkbox" />
                <label className="mr-3" htmlFor="">
                  Local Culture
                </label>
                <input className="checkbox" type="checkbox" />
                <label htmlFor="">Airport</label>
              </div>
            </div>
          </div>
          <div className="filter-results col-4 mt-5">
            {this.state.trenutniUser !== undefined ? (
              <div>
                <h4>{this.state.trenutniUser.countryName}</h4>
                <p>{this.state.trenutniUser.cityName}</p>
                <p>{this.state.trenutniUser.username}</p>
                {
                  this.state.phoneChecked !== undefined ?
                  <p>{this.state.phoneChecked.phone}</p> :
                    null

                }
                {
                  this.state.websiteChecked !== undefined ?
                  <p>{this.state.websiteChecked.website}</p> :
                    null
                }
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
