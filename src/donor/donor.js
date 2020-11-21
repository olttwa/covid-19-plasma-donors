import React, { Component } from 'react'
import Form from './form'

export class Donor extends Component {
  state = {
    step: 1,
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    bloodGroup: '',
    city: ''
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { name, age, gender, phone, email, bloodGroup, recoveryDate, location } = this.state;
    const values = { name, age, gender, phone, email, bloodGroup, recoveryDate, location };

    switch (step) {
      case 1:
        return (
          <Form
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      // case 2:
      //   return (
      //     <Confirm
      //       nextStep={this.nextStep}
      //       prevStep={this.prevStep}
      //       values={values}
      //     />
      //   );
      // case 3:
      //   return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Donor
