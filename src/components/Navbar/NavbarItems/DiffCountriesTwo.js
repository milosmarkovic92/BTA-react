import React, { Component } from 'react';
import CountriesData from '../../constants/countries.json';

export default class DiffCountriesTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedCountry: null,
        };
      }
    
      onChangeHandler = event => {
        const selectedCountry = CountriesData[event.target.value - 1];
    
        this.setState({
          selectedCountry,
        });
      };
    
      render() {
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
                {selectedCountry.city.map(item => (
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
