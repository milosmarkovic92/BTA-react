import React, { Component } from 'react';

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

    fetch('http://nationnebojsa-001-site1.gtempurl.com/api/countries/' + e.target.value)
      .then(response => response.json())
      .then(parsedJSON => {
        this.setState({
          selectedCountry: parsedJSON,
        })
      })
      .catch(error => console.log('Error message: ', error));
  };

  render() {
    const { countries, cities, selectedCountry } = this.state;
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

        {selectedCountry && (
          <select name="city" defaultValue="city">
            <option disabled value="city">
              Select city
            </option>
            {cities.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  }
}

{/* <select
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

        {selectedCountry && (
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