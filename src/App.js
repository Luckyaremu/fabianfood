import React from "react";
import './App.css';
import Hero from "./components/Hero";
import {BrowserRouter as Router} from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />

    </Router>
  );
}

export default App;
