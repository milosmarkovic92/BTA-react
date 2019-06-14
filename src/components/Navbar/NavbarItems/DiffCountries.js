import React, { Component } from "react";
import "./NavbarItems.css";

export default class DiffCountries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      selectedCountry: [],
      selectedCountryCities: [],
      countries: [],
      localTransportChecked: [],
      entertainmentChecked: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  
  onChangeHandler = event => {
    //za selektovani id fetchovati podatke, nakon toga setovati u state
    fetch("http://nationnebojsa-001-site1.gtempurl.com/api/countries/" + event.target.value, {
      method: 'GET',
      headers: {
        "X-API-KEY": "my-secret-key"
      }
    })
      .then(response => response.json())
      .then(parsedJSON => {
        this.setState({ selectedCountry: parsedJSON });
      })
      .catch(error => console.log("error is: ", error));
    
      fetch("http://nationnebojsa-001-site1.gtempurl.com/api/cities/country/" + event.target.value, {
      method: 'GET',
      headers: {
        "X-API-KEY": "my-secret-key"
      }
    })
      .then(response => response.json())
      .then(parsedJSON => {
        this.setState({ selectedCountryCities: parsedJSON });
      })
      .catch(error => console.log("error is: ", error));
  };
  // fetch za checkbox
  checkTransportItem = (e) => {
    const {checked} = e.target;
    fetch("https://jsonplaceholder.typicode.com/users/" + e.target.value)
    .then(response => response.json())
    .then(parsedJSON => 
      
      {
      checked ?
      this.setState({ localTransportChecked: parsedJSON }) :
      this.setState({localTransportChecked: []})
    }
    )

    .catch(error => console.log("error is: ", error));
  }
  // fetch za checkbox
  checkEntertainmentItem = (e) => {
    const {checked} = e.target;
    fetch("http://nationnebojsa-001-site1.gtempurl.com/api/cities/" + e.target.value)
    .then(response => response.json())
    .then(parsedJSON => 
      
      {
      checked ?
      this.setState({ entertainmentChecked: parsedJSON }) :
      this.setState({entertainmentChecked: []})
    }
    )

    .catch(error => console.log("error is: ", error));
  }
//  prvi fetch podataka koji se dobavlja na componentDidMount
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
          countryName: `${user.countryName}`
        }))
      )
      .then(countries =>
        this.setState({
          countries,
          isLoading: false
        })
      )
      .catch(error => console.log("error is: ", error));
  }

  render() {
    const { countries } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="filter-container col-8 mt-5">
            <h1>Life in Different Countries</h1>
            <hr />
            <div className="filters">
              {/* ovde bi selekti i checkboxovi trebali da se razbiju u komponente */}
              <select 
                className="select" 
                defaultValue="user" 
                onChange={this.onChangeHandler}>
                <option disabled value="user">
                  Select country
                </option>
                {countries.map(country => {
                  const { countryName, id } = country;
                  return (
                    <option key={id} value={id}>
                      {countryName}
                    </option>
                  );
                })}
              </select>
              <select className="select">
                {this.state.selectedCountry !== undefined ? (
                  <option value="">{this.state.selectedCountry.cityName}</option>
                ) : null}
              </select>
            
              <select className="select">
                {this.state.selectedCountry !== undefined ? (
                  <option value="">{this.state.selectedCountry.username}</option>
                ) : null}
              </select>
              <div className="select">
                <input className="checkbox" type="checkbox" 
                  value={this.state.selectedCountry.id}
                  onClick={this.checkTransportItem}
                  />
                <label className="mr-3" htmlFor="">
                  Local Transport
                </label>
                <input className="checkbox" type="checkbox" 
                  value={this.state.selectedCountry.id}
                  onClick={this.checkEntertainmentItem}/>
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
            {this.state.selectedCountry !== undefined ? (
              <div>
                <h4>{this.state.selectedCountry.countryName}</h4>
                <p>{this.state.selectedCountry.cityName}</p>
                <p>{this.state.selectedCountry.username}</p>
                {
                  this.state.localTransportChecked !== undefined ?
                  <p>{this.state.localTransportChecked.localTransport}</p> :
                    null
                }
                {
                  this.state.entertainmentChecked !== undefined ?
                  <p>{this.state.entertainmentChecked.entertainment}</p> :
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
