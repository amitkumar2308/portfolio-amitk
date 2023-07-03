import React from 'react';
import {HashRouter, Route, Routes } from 'react-router-dom';

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Service from "./routes/Service";
import Resume from "./routes/Resume";

function App() {
  return (
      <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Project" element={<Project />} />
        <Route path="Service" element={<Service />} />
        <Route path="Resume" element={<Resume />} />
      </Routes>
      </HashRouter>
  
  );
}

export default App;
