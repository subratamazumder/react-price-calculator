import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GoldPriceCalculator from "./components/gold-price-calculator"
import Header from "./components/header"
import Footer from "./components/footer"
function App() {
  return (
    <div>
      <Header></Header>
      <GoldPriceCalculator></GoldPriceCalculator>
      <Footer></Footer>
    </div>
  );
} 

export default App;
