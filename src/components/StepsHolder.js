import React, { Component } from 'react';
import UserInfo from './UserInfo';
import UserBio from './UserBio';
import ConfirmInfo from './ConfirmInfo';

export default class StepsHolder extends Component {
        state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            secondAddress: '',
            phone: '',
            profession: ''
        }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    onChangeHandler = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const {firstName, lastName, email, password, address, secondAddress, phone, profession} = this.state;
        const values = {firstName, lastName, email, password, address, secondAddress, phone, profession};
        switch (step) {
            case 1:
                return (
                    <UserInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.onChangeHandler}
                        x={values}
                    />
                )
            case 2:
                return (
                    <UserBio 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.onChangeHandler}
                        x={values}
                    />
                )
            case 3:
                return (
                    <ConfirmInfo 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        x={values}
                    />
                )
            default:
                return <p>Foo</p>
        }
    }
}
