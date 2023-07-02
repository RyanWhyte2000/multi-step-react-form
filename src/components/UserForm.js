import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormUserDetails';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',

    }

    // Proceed to next Step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Previous Step
    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle field change

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch (step) {

            case 1:
                return (
                    <div>
                        <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}/>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <FormPersonalDetails
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        handleChange={this.handleChange}
                        values={values}/>
                    </div>
                )
            case 3:
                return (
                    <div>
                        <Confirm
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        values={values}/>
                    </div>
                )
            case 4:
                return <Success/>;
            default:
                (console.log('Practice Code for from Traversy Media'))       }


    }
}

export default UserForm
