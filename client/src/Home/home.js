import React, {useState, useEffect} from "react";
import "./home.css"
import tastemaker_logo from "../images/tastemaker_logo.svg";
import spotify_logo from "../images/spotify_logo.svg";

export default function Home() {
    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=19b24e60a9c645d0805d8e68a5fcdaf6&response_type=code&redirect_uri=http://localhost:3000/callback&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-private%20playlist-modify-public`
    console.log(spotifyAuthUrl)
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
                        <a href={spotifyAuthUrl}>
                            <img src={spotify_logo} alt="Click Here to Authenticate Your Spotify!" />
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}