import React, { Component } from 'react';
import Input from './FormDetails/Input';
import Selects from './FormDetails/Select';
import Button from 'react-bootstrap/Button';

export default class UserBio extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { handleChange, x } = this.props;
        return (
            <div>
                <form action="" className="m-5">
                    <Input 
                        label="First Name*" 
                        name="firstName" 
                        onChange={handleChange('firstName')} 
                        defaultValues={x.firstName}
                    />
                    <Input 
                        label="Last Name*" 
                        name="lastName" 
                        onChange={handleChange('lastName')} 
                        defaultValues={x.lastName}
                    />
                    <Input 
                        label="Address*" 
                        name="address" 
                        onChange={handleChange('address')} 
                        defaultValues={x.address}
                    />
                    <Input 
                        label="Address 2" 
                        name="secondAddress" 
                        onChange={handleChange('secondAddress')} 
                        defaultValues={x.secondAddress}
                    />
                    <Input 
                        label="Phone" 
                        name="phone" 
                        onChange={handleChange('phone')} 
                        defaultValues={x.phone}
                    />
                    <Selects
                        label="Profession" 
                        name="profession" 
                        onChange={handleChange('profession')} 
                        defaultValues={x.profession}
                    />
                </form>
                <Button className="m-2 btn-warning" onClick={this.back}>Previous Step</Button>
                <Button className="m-2 btn-success" onClick={this.continue}>Next Step</Button>
            </div>
        )
    }
}
