import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom"
import "./recommendations.css"
import tastemaker_logo from "../images/tastemaker_logo.svg"
import PlaylistInputForm from "./playlist_input_form"

export default function Recommendations() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get('authorizationCode');
    console.log("REC: "+authorizationCode)

    return (
        <div className="rec_header_and_input">
            <div className="mini_logo">
                <img src={tastemaker_logo} className="logo_2" alt="TASTEMAKER" />
            </div>
            <div className="playlist_input">
                <PlaylistInputForm />
            </div>
        </div>
    )
}