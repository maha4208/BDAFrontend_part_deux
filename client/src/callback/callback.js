import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const SpotifyCallback = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const parsedParams = queryString.parse(window.location.search);
      const authorizationCode = parsedParams.code;
  
      if (authorizationCode !== undefined && authorizationCode !== null && authorizationCode !== '') {
        navigate(`/recommendations?authorizationCode=${authorizationCode}`)
      }
    }, []);
  
    return (
      <div>
        {/* Render any additional UI components as needed */}
      </div>
    );
  };
  
  export default SpotifyCallback;