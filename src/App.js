import './App.css';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

function App() {
  return (
  
    <div>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </div>
  );
}

export default App;
