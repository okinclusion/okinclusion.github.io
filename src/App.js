import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import History from './components/pages/History.jsx';
import Mission from './components/pages/Mission-Vision.jsx';
import Team from './components/pages/Team.jsx';
import Priorities from './components/pages/Strategic-Priorities.jsx';
import Accreditation from './components/pages/Accreditation.jsx';
import OMR from './components/pages/Outcomes-Management.jsx';
import Penticton from './components/pages/CI-Penticton.jsx';
import Keremeos from './components/pages/CI-Keremeos.jsx';
import HomeShare from './components/pages/Home-Share.jsx';
import HomeShareApply from './components/pages/HS-Apply.jsx';
import Careers from './components/pages/Careers.jsx';
import CareersApply from './components/pages/Careers-Apply.jsx';
import SupportedEmployment from './components/pages/Supported-Employment.jsx';
import SupportedLiving from './components/pages/Supported-Living.jsx';
import Respite from './components/pages/Respite.jsx';
import Scope from './components/pages/Scope-of-Services.jsx';
import Resources from './components/pages/Resources';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login.js';
import Staff from './components/pages/Staff.js';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/"                   element={<Home />} />
          <Route path="/history"            element={<History />} />
          <Route path="/missionvision"      element={<Mission />} />
          <Route path="/team"               element={<Team />} />
          <Route path="/strategicpriorities" element={<Priorities />} />
          <Route path="/accreditation"      element={<Accreditation />} />
          <Route path="/OMR"                element={<OMR />} />
          <Route path="/penticton"          element={<Penticton />} />
          <Route path="/keremeos"           element={<Keremeos />} />
          <Route path="/homeshare"          element={<HomeShare />} />
          <Route path="/homeshare-apply"    element={<HomeShareApply />} />
          <Route path="/employment"         element={<Careers />} />
          <Route path="/employment-apply"   element={<CareersApply />} />
          <Route path="/supportedliving"    element={<SupportedLiving />} />
          <Route path="/supportedemployment" element={<SupportedEmployment />} />
          <Route path="/respite"            element={<Respite />} />
          <Route path="/news"               element={<News />} />
          <Route path="/resources"          element={<Resources />} />
          <Route path="/contact"            element={<Contact />} />
          <Route path="/login"              element={<Login />} />
          <Route path="/staff"              element={<Staff />} />
          <Route path="/scopeofservices"    element={<Scope />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;