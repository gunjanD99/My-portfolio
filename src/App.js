import "./App.css";
// import {  BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Sociallinks from "./components/Sociallinks";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sociallinks />
      <About />
      <Skills />
      <Education />
      <Experience />
    </>
  );
}

export default App;
