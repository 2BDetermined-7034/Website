import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';
import Home from './pages/Home';
import Outreach from './pages/Outreach';
import PPEProject from './pages/PPEProject';
import Camps from './pages/Camps';
import Calendar from './pages/Calendar';
import Sponsors from './pages/Sponsors';
import HourOfCode from './pages/HourOfCode';
import Compresults from './pages/Compresults';
import SupportUs from './pages/SupportUs';
import Newsletter from './pages/Newsletter';
import AboutUs from './pages/AboutUs';
import ChangingSystem from './pages/ChangingSystem';

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
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/community/outreach" component={Outreach} />
            <Route exact path="/community/ppe" component={PPEProject} />
            <Route exact path="/community/hourofcode" component={HourOfCode} />
            <Route exact path="/About_Us/Competition_Results" component={Compresults} />
            <Route exact path="/community/camps" component={Camps} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/sponsors" component={Sponsors} />
            <Route exact path="/Newsletter" component={Newsletter} />
            <Route exact path="/SupportUs" component={SupportUs} />
            <Route exact path="/ChangingtheSySTEM" component={ChangingSystem} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
