import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
//import { BrowserRouter } from 'react-router-dom';
import Home from './Views/home';
import Contact from './Views/contact';
import Quien from './Views/quien';
import Services from './Views/Services';


function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quien" element={<Quien />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

  );
}

export default App;