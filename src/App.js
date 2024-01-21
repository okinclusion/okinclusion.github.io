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
import Inclusion from './components/pages/CommunityInclusion';
import HomeShare from './components/pages/HomeShare';
import Employment from './components/pages/Employment';
import SupportedLiving from './components/pages/SupportedLiving';
import Respite from './components/pages/Respite';
import Resources from './components/pages/Resources';
import News from './components/pages/News';
import Contact from './components/pages/Contact';

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
          <Route path="/stategicpriorities" element={<Priorities/>}/>
          <Route path="/accreditation" element={<Accreditation/>}/>
          <Route path="/communityinclusion" element={<Inclusion/>}/>
          <Route path="/homeshare" element={<HomeShare/>}/>
          <Route path="/employment" element={<Employment/>}/>
          <Route path="/supportedliving" element={<SupportedLiving/>}/>
          <Route path="/respite" element={<Respite/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
