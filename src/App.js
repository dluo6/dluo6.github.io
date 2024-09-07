import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact'

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
