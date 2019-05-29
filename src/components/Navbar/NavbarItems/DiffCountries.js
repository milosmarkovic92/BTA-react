import React, { Component } from 'react';

export default class DiffCountries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUserID: null,
            isLoading: true,
            contacts: [],
            selectedName: ''
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    onChangeHandler = (event) => {
            //za selektovani id fetchovati podatke, nakon toga setovati u state

            fetch('https://jsonplaceholder.typicode.com/users/'+event.target.value)
            .then(response => response.json())
            .then(parsedJSON => {
                this.setState(
                    {trenutniUser: parsedJSON}
            )})
           
            .catch(error => console.log('error is: ', error))

    }

    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(parsedJSON => parsedJSON.map(user => (
                {
                    id: `${user.id}`,
                    name: `${user.name}`,
                    username: `${user.username}`,
                    email: `${user.email}`
                }
            )))
            .then(contacts => this.setState({
                contacts,
                isLoading: false
            }))
            .catch(error => console.log('error is: ', error))
    }

    

    render() {
        const {contacts} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="filter-container col-6 mt-5">
                        <select name="" id="" onChange={this.onChangeHandler}>
                            {
                                contacts.map(contact => {
                                    const { email, name, id } = contact;
                                    return <option key={email} value={id}>{name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="filter-results col-6">
                        <p>
                            {this.state.trenutniUser !== undefined ? 
                                this.state.trenutniUser.name :
                                'nema korisnika '
                            }
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
