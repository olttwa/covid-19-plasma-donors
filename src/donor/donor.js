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

const Donor = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const location = GeoLocation();

  const callBackend = () => {
    console.log("Name: " + name)
    console.log("Age: " + age)
    console.log("Gender: " + gender)
    console.log("Phone: " + phone)
    console.log("Email: " + email)
    console.log("BloodGroup: " + bloodGroup)
    console.log("Location: " + location.coordinates.lat + ", " + location.coordinates.lng)
  }

  return (
    <MuiThemeProvider theme={theme} >
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
            placeholder="Enter Your Email"
            label="Email"
            onChange={event => setEmail(event.target.value)}
            defaultValue={email}
            margin="normal"
            fullWidth
          />
          <br />
          <FormControl component="fieldset">
            <FormLabel component="legend">Blood Group</FormLabel>
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
          >Submit</Button>
        </Dialog>
      </>
    </MuiThemeProvider >
  );
}

export default Donor
