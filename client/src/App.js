import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Programs from './pages/Programs';
import Home from './pages/Home';
import About from './pages/About';

// Placeholder components for each page
const WhatToBring = () => <div><h2>What to Bring Page</h2><p>List of items to bring.</p></div>;
const Contact = () => <div><h2>Contact Us Page</h2><p>Contact Silver Creek Equestrian Education.</p></div>;


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/what-to-bring" element={<WhatToBring />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;