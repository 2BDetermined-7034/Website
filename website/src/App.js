import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';
import Calendar from './pages/Calendar';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main role="main">
        <div className="container-fluid pl-0 pr-0 pt-4 pb-4 backgroundTexture">
          <Switch>
            <Route path="/home">
              <div>
                Test
              </div>
            </Route>
            <Route path="/calendar" component={Calendar}/>
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
