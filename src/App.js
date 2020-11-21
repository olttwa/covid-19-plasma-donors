import Button from '@material-ui/core/Button';
import './App.css';
import Donor from './donor/donor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/donor" component={Donor} />
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
        🩸 Become a Covid-19 Plasma Donor 🩸
        </Button>
      <br></br>

      <Button variant="contained" color="secondary">
        🔍   Find Covid-19 Plasma Donors   🔍
        </Button>
    </header>
  );
}

export default App;
