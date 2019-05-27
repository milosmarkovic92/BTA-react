import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class ConfirmInfo extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { x } = this.props;
        return (
            <React.Fragment>
                <ul>
                    <li>
                        <p>{x.firstName}</p>
                    </li>
                    <li>
                        <p>{x.lastName}</p>
                    </li>
                    <li>
                        <p>{x.email}</p>
                    </li>
                    <li>
                        <p>{x.address}</p>
                    </li>
                    <li>
                        <p>{x.secondAddress}</p>
                    </li>
                    <li>
                        <p>{x.phone}</p>
                    </li>
                    <li>
                        <p>{x.profession}</p>
                    </li>
                </ul>
                <Button className="m-2 btn-warning" onClick={this.back}>Previous Step</Button>
                <Button className="m-2 btn-success" onClick={this.continue}>Confirm</Button>
            </React.Fragment>
        )
    }
}
