import './App.css';
import Navbar from './components/Header-Footer/Navbar';
import Footer from './components/Header-Footer/Footer';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
      <Footer />
    </div>
  );
}

export default App;
