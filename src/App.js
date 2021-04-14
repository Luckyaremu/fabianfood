import React from "react";
import './App.css';
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import {productData, productDataTwo } from "./components/Products/data";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite" data={productData}/>
      <Feature />
      <Products heading="Choose your orders" data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
