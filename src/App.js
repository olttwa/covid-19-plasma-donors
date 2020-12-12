import Button from '@material-ui/core/Button';
import './App.css';
import Donor from './donor/donor';
import Recipient from './recipient/recipient';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/donor" component={Donor} />
          <Route path="/recipient" component={Recipient} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <header className="App-header">
      <p>
        🪔 Welcome to Chirag 🪔
          <br></br>
          A Community-driven Covid-19 Plasma Donors Database
        </p>
      <br></br>

      <Button variant="contained" color="primary" href="/donor">
        🩸 Become a Plasma Donor 🩸
        </Button>
      <br></br>

      <Button variant="contained" color="secondary" href="/recipient">
        🔍   Find Plasma Donors   🔍
        </Button>
    </header>
  );
}

export default App;
