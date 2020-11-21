import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';

export class Form extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Donor Details" />
            <TextField
              placeholder="Enter Your Name"
              label="Name"
              onChange={handleChange('name')}
              defaultValue={values.name}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Enter Your Age"
              label="Age"
              onChange={handleChange('age')}
              defaultValue={values.age}
              margin="normal"
              fullWidth
              inputProps={{ inputMode: 'numeric' }}
            />
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup row value={values.gender} onChange={handleChange('gender')}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            <TextField
              placeholder="Enter Your Phone"
              label="Phone"
              onChange={handleChange('phone')}
              defaultValue={values.phone}
              margin="normal"
              fullWidth
              inputProps={{ inputMode: 'numeric' }}
            />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Blood Group</FormLabel>
              <RadioGroup row value={values.bloodGroup} onChange={handleChange('bloodGroup')}>
                <FormControlLabel value="A+" control={<Radio />} label="A➕" />
                <FormControlLabel value="A-" control={<Radio />} label="A➖" />
              </RadioGroup>
              <RadioGroup row value={values.bloodGroup} onChange={handleChange('bloodGroup')}>
                <FormControlLabel value="B+" control={<Radio />} label="B➕" />
                <FormControlLabel value="B-" control={<Radio />} label="B➖" />
              </RadioGroup>
              <RadioGroup row value={values.bloodGroup} onChange={handleChange('bloodGroup')}>
                <FormControlLabel value="AB+" control={<Radio />} label="AB➕" />
                <FormControlLabel value="AB-" control={<Radio />} label="AB➖" />
              </RadioGroup>
              <RadioGroup row value={values.bloodGroup} onChange={handleChange('bloodGroup')}>
                <FormControlLabel value="O+" control={<Radio />} label="O➕" />
                <FormControlLabel value="O-" control={<Radio />} label="O➖" />
              </RadioGroup>
            </FormControl>

            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Submit</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    )
  }
}

export default Form
