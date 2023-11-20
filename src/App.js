import './App.css';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
