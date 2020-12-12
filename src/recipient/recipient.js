import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import GeoLocation from '../hooks/geoLocation'
import axios from 'axios'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});

const Recipient = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [alternatePhone, setAlternatePhone] = useState('');
  const [email, setEmail] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const location = GeoLocation();

  const callBackend = () => {
    const body = {
      "name": name,
      "age": age,
      "gender": gender,
      "phone": phone,
      "alternatePhone": alternatePhone,
      "email": email,
      "bloodGroup": bloodGroup,
      "location": {
        "lat": location.coordinates.lat,
        "lon": location.coordinates.lon
      }
    }
    axios.post("http://chirag:8080/recipients", JSON.stringify(body)).then((response) => {
      console.log(response);
    })
    setStep(2)
  }

  switch (step) {
    case 1:
      return (
        <MuiThemeProvider theme={theme} >
          <>
            <Dialog
              open
              fullWidth
              maxWidth='sm'
            >
              <AppBar title="Enter Recipient Details" />
              <TextField
                placeholder="Enter Your Name"
                label="Name"
                onChange={event => setName(event.target.value)}
                defaultValue={name}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder="Enter Your Age"
                label="Age"
                onChange={event => setAge(event.target.value)}
                defaultValue={age}
                margin="normal"
                fullWidth
                inputProps={{ inputMode: 'numeric' }}
              />
              <br />
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup row value={gender} onChange={event => setGender(event.target.value)}>
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
              <TextField
                placeholder="Enter Your Phone"
                label="Phone"
                onChange={event => setPhone(event.target.value)}
                defaultValue={phone}
                margin="normal"
                fullWidth
                inputProps={{ inputMode: 'numeric' }}
              />
              <TextField
                placeholder="Enter Your Alternate Phone for Emergency Contact"
                label="Alternate Phone"
                onChange={event => setAlternatePhone(event.target.value)}
                defaultValue={alternatePhone}
                margin="normal"
                fullWidth
                inputProps={{ inputMode: 'numeric' }}
              />
              <TextField
                placeholder="Enter Your Email"
                label="Email"
                onChange={event => setEmail(event.target.value)}
                defaultValue={email}
                margin="normal"
                fullWidth
              />
              <br />
              <FormControl component="fieldset">
                <FormLabel component="legend">Recipient's Blood Group</FormLabel>
                <RadioGroup row value={bloodGroup} onChange={event => setBloodGroup(event.target.value)}>
                  <FormControlLabel value="A+" control={<Radio />} label="A➕" />
                  <FormControlLabel value="A-" control={<Radio />} label="A➖" />
                </RadioGroup>
                <RadioGroup row value={bloodGroup} onChange={event => setBloodGroup(event.target.value)}>
                  <FormControlLabel value="B+" control={<Radio />} label="B➕" />
                  <FormControlLabel value="B-" control={<Radio />} label="B➖" />
                </RadioGroup>
                <RadioGroup row value={bloodGroup} onChange={event => setBloodGroup(event.target.value)}>
                  <FormControlLabel value="AB+" control={<Radio />} label="AB➕" />
                  <FormControlLabel value="AB-" control={<Radio />} label="AB➖" />
                </RadioGroup>
                <RadioGroup row value={bloodGroup} onChange={event => setBloodGroup(event.target.value)}>
                  <FormControlLabel value="O+" control={<Radio />} label="O➕" />
                  <FormControlLabel value="O-" control={<Radio />} label="O➖" />
                </RadioGroup>
              </FormControl>
              <br />
              <Button
                color="primary"
                variant="contained"
                onClick={callBackend}
              >Submit Recipient Details</Button>
            </Dialog>
          </>
        </MuiThemeProvider >
      );
    case 2:
      return (
        <h1>Hello aks</h1>
      );
    default:
      (console.log('This is a multi-step form built with React.'))
  }
}

export default Recipient
