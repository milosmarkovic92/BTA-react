import React, { Component } from 'react';
import CountriesData from '../../constants/countries.json';

export default class DiffCountries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            contacts: [],
            selectedCountry: null,
            selectedCity: []
        }
    }

    componentDidMount() {
        // this.fetchData();
    }

    onChangeHandler = (event) => {
        // //za selektovani id fetchovati podatke, nakon toga setovati u state

        // fetch('https://jsonplaceholder.typicode.com/users/' + event.target.value)
        //     .then(response => response.json())
        //     .then(parsedJSON => {
        //         this.setState(
        //             { trenutniUser: parsedJSON }
        //         )
        //     })

        //     .catch(error => console.log('error is: ', error))

        // const test = CountriesData[event.target.value - 1];

        // this.setState({
        //     selectedCountry: test,
        //     selectedCity: this.state.selectedCountry.city
        // })

        // console.log(this.state.selectedCity);
        const selectedCountry = CountriesData[event.target.value - 1];

        this.setState({
            selectedCountry,
        });
    }

    // fetchData() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(parsedJSON => parsedJSON.map(user => (
    //             {
    //                 id: `${user.id}`,
    //                 name: `${user.name}`,
    //                 username: `${user.username}`,
    //                 email: `${user.email}`
    //             }
    //         )))
    //         .then(contacts => this.setState({
    //             contacts,
    //             isLoading: false
    //         }))
    //         .catch(error => console.log('error is: ', error))
    // }



    render() {
        const { selectedCountry } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="filter-container col-6 mt-5">
                        {/* <select className="mb-4" name="" id="" onChange={this.onChangeHandler}>
                            {
                                contacts.map(contact => {
                                    const { email, name, id } = contact;
                                    return <option key={email} value={id}>{name}</option>
                                })
                            }
                        </select>
                        <select className="mb-4">
                            {this.state.trenutniUser !== undefined ?
                                <option value="">{this.state.trenutniUser.email}</option> :
                                null
                            }
                        </select>
                        <select>
                            {this.state.trenutniUser !== undefined ?
                                <option value="">{this.state.trenutniUser.username}</option> :
                                null
                            }
                        </select> */}
                        {/* <select name="" id="" onChange={this.onChangeHandler}>
                            {CountriesData.map(item => {
                                const { id, country } = item;
                                return <option key={id} value={id}>{country}</option>
                            })}
                        </select>
                        <select name="" id="">
                            {this.state.selectedCountry !== undefined ?
                                <option key='' value="">{this.state.selectedCountry.city}</option> :
                                null
                            }
                            
                        </select>
                        <select name="" id=""></select> */}
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
                    <div className="filter-results col-6 mt-5">
                        {/* {this.state.trenutniUser !== undefined ?
                            <div>
                                <h4>{this.state.trenutniUser.name}</h4>
                                <p>{this.state.trenutniUser.email}</p>
                                <p>{this.state.trenutniUser.username}</p>
                            </div> :
                            null
                        } */}
                    </div>
                </div>
            </div>
        )
    }
}
