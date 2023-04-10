import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import React from "react";
import Home from "./Home/home"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
