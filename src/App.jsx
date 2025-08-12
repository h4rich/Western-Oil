import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import ProvidingServices from "./components/ProvidingServices"; // new
import Manufacturing from "./components/Manufacturing"; // new
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import QHSE from "./components/QHSE";
import Notfound from "./components/Notfound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/not-found" element={<Notfound />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />

          {/* Sub-services */}
          <Route
            path="services/providing-services"
            element={<ProvidingServices />}
          />
          <Route path="services/manufacturing" element={<Manufacturing />} />

          <Route path="qhse" element={<QHSE />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
