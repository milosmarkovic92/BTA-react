import React, { Component } from 'react';
import CountriesData from '../../constants/countries.json';
import CitiesData from '../../constants/cities.json';
import Select from '../../FormDetails/Select';
// import { thisExpression } from '@babel/types';
export default class DiffCountriesTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selectedCountry: [],
      cities: []
    };
  }

  componentDidMount() {
    this.fetchCountryData();
  }

  // fetchCityData = () => {
  //   fetch('http://nationnebojsa-001-site1.gtempurl.com/api/cities/')
  //       .then(response => console.log(response.json()))
  //       // .then(parsedJSON => 
  //       //     parsedJSON.map(item => ({
  //       //       id: `${item.id}`,
  //       //       countryId: `${item.countryId}`,
  //       //       cityName: `${item.cityName}`
  //       //     }))
  //       //   )
  //       // .then(result => (
  //       //   this.setState({
  //       //     cities: result
  //       //   })
  //       // ))
  //       // .catch(error => console.log('Error message: ', error));
  // }

  fetchCountryData = () => {
    fetch('http://nationnebojsa-001-site1.gtempurl.com/api/countries/')
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.map(item => ({
          id: `${item.id}`,
          countryName: `${item.countryName}`,
        }))
      )
      .then(result => (
        this.setState({
          countries: result
        })
      ))
      .catch(error => console.log('Error message: ', error));
  }

  onChangeHandler = (e) => {
    let citiesArray = [];

    fetch('http://nationnebojsa-001-site1.gtempurl.com/api/countries/' + e.target.value)
      .then(response => response.json())
      .then(parsedJSON => {
        this.setState({
          selectedCountry: parsedJSON,
        })
      })
      .catch(error => console.log('Error message: ', error));

    if (e) {
      fetch('http://nationnebojsa-001-site1.gtempurl.com/api/cities/')
        .then(response => response.json())
        .then(parsedJSON =>
          parsedJSON.map(item => ({
            id: `${item.id}`,
            countryId: `${item.countryId}`,
            cityName: `${item.cityName}`
          }))
        )
        .then(result => (
          this.setState({
            cities: result
          })
        ))
        .then(console.log(this.state.cities))
        .catch(error => console.log('Error message: ', error));

    }
  };

  getId = () => {
    let result;
    result = this.state.countries.map(item => {
      return (item.id)
    })
    return result
  }

  getName = () => {
    let resultName;
    resultName = this.state.countries.map(item => {
      return (item.countryName)
    })
    return resultName
  }

  render() {
    console.log(this.getId());
    console.log(this.getName());

    const { countries, cities } = this.state;
    return (
      <div>
        <select
          name="country"
          defaultValue="country"
          onChange={this.onChangeHandler}
        >
          <option disabled value="country">
            Select country
              </option>
          {countries.map(({ id, countryName }) => (
            <option key={id} value={id}>
              {countryName}
            </option>
          ))}
        </select>

        <Select
          name="country"
          defaultValue="country"
          onChange={this.onChangeHandler}
          defaultOption="Select Country"
          apiResult={countries}
          dataId={this.getId()}
          dataName={this.getName()}
          disabled="disabled"
          selectedCountry={this.state.selectedCountry}
        />

        <Select
          name="city"
          defaultValue="cities"
          onChange={this.onChangeHandler}
          defaultOption="Select City"
          apiResult={cities}
          dataId={cities.id}
          dataName={cities.cityName}
        />

        {/* {selectedCountry && (
              <select name="city" defaultValue="city">
                <option disabled value="city">
                  Select city
                </option>
                {this.state.cities.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            )} */}
      </div>
    );
  }
}

// {contacts && (
//   <select name="city" defaultValue="city">
//     <option disabled value="city">
//       Select city
//     </option>
//     {this.state.trenutniUser.map(item => (
//       <option key={item.id} value={item.id}>
//         {item.cityName}
//       </option>
//     ))}
//   </select>
// )}
