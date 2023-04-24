import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom"
import "./recommendations.css"

export default function SongArtistDisplay({song, artist}) {
   return (
        <div className="display">
            <p>{song}</p>
            <p>{artist}</p>
        </div>
   )
}