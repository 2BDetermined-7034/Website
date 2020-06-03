import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';
import Home from './pages/Home';
import Outreach from './pages/Outreach';
import PPEProject from './pages/PPEProject';
import WeeklyStem from './pages/WeeklyStem';
import SummerCamp from './pages/SummerCamp';
import Calendar from './pages/Calendar';
import Sponsors from './pages/Sponsors';

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
            <Route exact path="/home" component={Home} />
            <Route exact path="/community/outreach" component={Outreach} />
            <Route exact path="/community/ppe" component={PPEProject} />
            <Route exact path="/community/stemchallenges" component={WeeklyStem} />
            <Route exact path="/community/summerofsteam" component={SummerCamp} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/sponsors" component={Sponsors} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
