import React, {useState, useEffect} from "react";
import "./home.css"
import tastemaker_logo from "../images/tastemaker_logo.svg";
import spotify_logo from "../images/spotify_logo.svg";

export default function Home() {

    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const clientId = '371390e8db164b3db503443338028f0c';
    const redirectUri = 'http://localhost:3000/callback';
    const scopes = [
    'user-read-private', 
    'user-read-email', 'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-private',
    'playlist-modify-public'];

    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
  
      if (code) {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic MzcxMzkwZThkYjE2NGIzZGI1MDM0NDMzMzgwMjhmMGM6ZjE0MzdkYWZlODljNDFmN2ExMzY4ZTY3YjMzYThkYTg'
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri
          })
        };
  
        fetch('https://accounts.spotify.com/api/token', requestOptions)
          .then(response => response.json())
          .then(data => {
            const accessToken = data.access_token;
            setAccessToken(accessToken);
            console.log('accessToken')
          })
          .catch(error => console.log(error));
      }
    }, []);

    function handleLogin() {
        const queryParams = new URLSearchParams({
          response_type: 'code',
          client_id: clientId,
          scope: scopes.join(' '),
          redirect_uri: redirectUri
        });
        const url = `${authEndpoint}?${queryParams}`;
        window.location = url;
      }

    // const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=371390e8db164b3db503443338028f0c&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-email%20playlist-read-private%20user-read-private%20playlist-read-collaborative%20playlist-modify-private%20playlist-modify-public`
    // console.log(spotifyAuthUrl)
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
                        <a onClick={handleLogin}>
                            <img src={spotify_logo} alt="Click Here to Authenticate Your Spotify!" />
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}