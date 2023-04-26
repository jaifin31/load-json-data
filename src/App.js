import React from "react";
import "./App.css";
 import { Stocks } from "./Stocks";
 import HomePageHeader from "./HomePageHeader";
import { Stock } from "./Stocks";



function App() {
  return (
    <div className="App">
      <HomePageHeader/>
      <Stocks />
    </div>
  );
}

export default App;
