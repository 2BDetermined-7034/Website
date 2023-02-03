import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './elements/Navbar';
import HourOfCode from './pages/HourOfCode';
import Scout from './pages/Scout';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main role="main">
        <div className="container-fluid pl-0 pr-0 pt-4 pb-4 backgroundTexture">
          <Switch>
            <Redirect from="/stemchallenge.php" to="/community/stemchallenges" />
            <Redirect from="/outreach.php" to="/community/stemchallenges" />
            <Route exact path="/community/hourofcode" component={HourOfCode} />
            <Route exact path="/scout" component={Scout} />
            <Route exact path="/main" component={Main} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
