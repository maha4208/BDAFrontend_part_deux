import React, { useState, useEffect } from "react";
import Data from '../StreamGraph/sampleData.json'
import { StreamGraph } from '../StreamGraph/StreamGraph'

export default function Recommendations() {
    return (
        <div className="home_page">
            <p>recommendations</p>
            <StreamGraph data={Data} />
        </div>
    )
}