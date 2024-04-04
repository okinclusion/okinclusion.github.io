import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import History from './components/pages/History';
import Mission from './components/pages/Mission';
import Team from './components/pages/Team';
import Priorities from './components/pages/Priorities';
import Accreditation from './components/pages/Accreditation.js';
import Penticton from './components/pages/Penticton';
import Keremeos from './components/pages/Keremeos';
import HomeShare from './components/pages/HomeShare';
import HomeShareApply from './components/HomeShareApply';
import Employment from './components/pages/Employment';
import EmploymentApply from './components/EmploymentApply';
import SupportedLiving from './components/pages/SupportedLiving';
import Respite from './components/pages/Respite';
import Resources from './components/pages/Resources';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login.js';
import Staff from './components/pages/Staff';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/missionvision" element={<Mission/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/strategicpriorities" element={<Priorities/>}/>
          <Route path="/accreditation" element={<Accreditation/>}/>
          <Route path="/penticton" element={<Penticton/>}/>
          <Route path="/keremeos" element={<Keremeos/>}/>
          <Route path="/homeshare" element={<HomeShare/>}/>
          <Route path="/homeshare-apply" element={<HomeShareApply/>}/>
          <Route path="/employment" element={<Employment/>}/>
          <Route path="/employment-apply" element={<EmploymentApply/>}/>
          <Route path="/supportedliving" element={<SupportedLiving/>}/>
          <Route path="/respite" element={<Respite/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/staff" element={<Staff/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
