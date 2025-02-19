import './App.css';
import Navbar from './components/Header-Footer/Navbar';
import Footer from './components/Header-Footer/Footer';
import React from 'react';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
