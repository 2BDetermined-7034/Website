import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
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

function RedirectWrapper({ to }) {
  let navigate = useNavigate();
  React.useEffect(() => {
    navigate(to);
  }, [navigate, to]);
  return null;
}

function App() {
  return (
      <Router>
        <header>
          <Navbar />
        </header>
        <main role="main">
          <div className="container-fluid pl-0 pr-0 pt-4 pb-4 backgroundTexture">
            <Routes>
              <Route path="/stemchallenge.php" element={<RedirectWrapper to="/community/stemchallenges" />} />
              <Route path="/outreach.php" element={<RedirectWrapper to="/community/stemchallenges" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/community/outreach" element={<Outreach />} />
              <Route path="/community/ppe" element={<PPEProject />} />
              <Route path="/community/hourofcode" element={<HourOfCode />} />
              <Route path="/About_Us/Competition_Results" element={<Compresults />} />
              <Route path="/community/camps" element={<Camps />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/Newsletter" element={<Newsletter />} />
              <Route path="/SupportUs" element={<SupportUs />} />
              <Route path="/ChangingtheSySTEM" element={<ChangingSystem />} />
              <Route path="*" element={<RedirectWrapper to="/home" />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </Router>
  );
}

export default App;
