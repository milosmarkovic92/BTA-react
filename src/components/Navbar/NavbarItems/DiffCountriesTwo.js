import React, { Component } from 'react';
import CountriesData from '../../constants/countries.json';
import CitiesData from '../../constants/cities.json'
export default class DiffCountriesTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedCountry: null,
          cities:null
        };
      }
    
      onChangeHandler = event => {

        //ovde se uvoze 2 jsona i pakuju u state

        const selectedCountry = CountriesData[event.target.value - 1];
        const cities = CitiesData;

        // fetch('https://jsonplaceholder.typicode.com/CitiesByCountry/' + event.target.value)
        // .then(response => response.json())
        // .then(parsedJSON => {

        //     this.setState(
        //         { trenutniUser: parsedJSON }
        //     )

        // })
        this.setState({
          selectedCountry:selectedCountry,
          cities:cities
        });
        
      };
    
      render() {
        console.log(this.state.cities);
        const { selectedCountry } = this.state;
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
              {CountriesData.map(({ id, country }) => (
                <option key={id} value={id}>
                  {country}
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
            )}
          </div>
        );
      }
}
