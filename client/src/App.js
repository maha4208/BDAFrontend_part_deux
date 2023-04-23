import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import React from "react";
import Home from "./Home/home"
import Recommendations from "./Recommendations/recommendations"
import { EditMetricForm } from './sliderForm/EditMetricForm';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recommendations" element={<Recommendations/>}/>
          <Route path="/form" element={<EditMetricForm/>}/> 
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
