import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import History from './components/History.jsx';
import Mission from './components/Mission-Vision.jsx';
import Team from './components/Team.jsx';
import Priorities from './components/Strategic-Priorities.jsx';
import Accreditation from './components/Accreditation.jsx';
import OMR from './components/Outcomes-Management.jsx';
import Penticton from './components/CI-Penticton.jsx';
import Keremeos from './components/CI-Keremeos.jsx';
import HomeShare from './components/Home-Share.jsx';
import HomeShareApply from './components/HS-Apply.jsx';
import Careers from './components/Careers.jsx';
import CareersApply from './components/Careers-Apply.jsx';
import SupportedEmployment from './components/Supported-Employment.jsx';
import SupportedLiving from './components/Supported-Living.jsx';
import Respite from './components/Respite.jsx';
import Scope from './components/Scope-of-Services.jsx';
import Resources from './components/Resources.jsx';
import News from './components/News.jsx';
import Contact from './components/Contact.jsx';
import Staff from './components/Staff-Resources.jsx';

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
          <Route path="/staff"              element={<Staff />} />
          <Route path="/scopeofservices"    element={<Scope />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;