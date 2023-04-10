import React from "react";
import "./home.css"
import tastemaker_logo from "../";
import spotify_logo from "../images/spotify_logo.svg";

export default function Home() {

    return (
        <div className="home_page">
            <header className = "header">
                <div className="logo_div">
                    <img src={tastemaker_logo} className="logo" alt="tastemaker logo"/>
                </div>
            </header>
            <main className="body">
                <div className="home_page_content">
                    <div className="description">
                        Tastemaker is a web tool to generate Spotify playlists to your exact specifications.
                        Click the Spotify logo on the right side of this web-page to authenticate your Spotify 
                        login and start making your taste.
                    </div>
                    <div className="link">
                        <img src={spotify_logo} alt="Click Here to Authenticate Your Spotify!" />
                    </div>
                </div>
            </main>
        </div>
    )
}