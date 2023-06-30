import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/NavBar';
//import { BrowserRouter } from 'react-router-dom';
import Home from './Views/home';
import Contact from './Views/contact';
import Como from './Views/quien';
import Services from './Views/Services';
import MediaQuery from 'react-responsive';

function App() {


  return (
    <>
      <MediaQuery minWidth={320} >
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/como" element={<Como />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </MediaQuery>
    </>
  );
}

export default App;