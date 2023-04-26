import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const SpotifyCallback = () => {
const navigate = useNavigate();
const [accessToken, setAccessToken] = useState('')


useEffect(() => {
  const parsedParams = queryString.parse(window.location.search);
  const code = parsedParams.code;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic MzcxMzkwZThkYjE2NGIzZGI1MDM0NDMzMzgwMjhmMGM6ZjE0MzdkYWZlODljNDFmN2ExMzY4ZTY3YjMzYThkYTg'
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: 'http://localhost:3000/callback'
    })
  };

  fetch('https://accounts.spotify.com/api/token', requestOptions)
    .then(response => response.json())
    .then(data => {
      const accessToken = data.access_token;
      setAccessToken(accessToken);
      console.log(accessToken)
    })
    .catch(error => console.log(error));
}, []);

useEffect(() => {
  console.log('token', accessToken);
  if (accessToken) {
    navigate(`/recommendations?token=${accessToken}`);
  }
}, [accessToken]);

navigate(`/`);
return null;
}

 

export default SpotifyCallback;