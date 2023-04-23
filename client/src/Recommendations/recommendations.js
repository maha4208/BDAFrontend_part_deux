import React, { useState, useEffect } from "react";
import Data from '../StreamGraph/sampleData.json'
import { StreamGraph } from '../StreamGraph/StreamGraph'
import './recommendations.css'
import { EditMetricForm } from "../sliderForm/EditMetricForm";

export default function Recommendations() {
    return (
<div className="home_page">
  <p>recommendations</p>
  <div className="container">
    <div className="metricForm">First Div</div>
    <div className="secondDiv">
      <div className="metricForm editForm">
        <EditMetricForm data={Data}/>
      </div>
    </div>
  </div>
  <StreamGraph data={Data} />
</div>
    )
}