import React, { Component } from 'react';
import Input from './FormDetails/Input';
import Button from 'react-bootstrap/Button';

export default class UserInfo extends Component {
    continue = (e) => {
       e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {  handleChange, x } = this.props;
        return (
            <div>
                <form action=""  className="m-5">
                    <Input 
                        label="Email*" 
                        name="email" 
                        onChange={handleChange('email')} 
                        defaultValues={x.email}
                    />
                    <Input
                        label="Password*" 
                        name="password" 
                        onChange={handleChange('password')} 
                        defaultValues={x.password}
                    />
                    <Input 
                        label="Repeat Password*"
                        name="repeatPassword" 
                        onChange={handleChange('repeatPassword')} 
                        defaultValues={x.repeatPassword}
                    />
                </form>
                <Button className="m-2 btn-success" onClick={this.continue}>Next Step</Button>
            </div>
        )
    }
}
