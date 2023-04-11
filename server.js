const express = require('express');
const axios =require("axios");
const path = require('path');
const app = express();
const queryString = require('querystring');
require("dotenv").config();
const port = process.env.PORT || 3000;
const session = require('express-session');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(session({
  secret: 'greg_greenstreet',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.get("/server/auth", (req, res) => {
  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&scope=user-library-read`
  res.json({auth_url:spotifyAuthUrl})
})

app.get('/callback', async (req, res) => {
  const { code } = req.query;
  console.log("CODE:     "+code)
  
  try {
    const spotifyResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      queryString.stringify({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
      }),
      {
        headers: {
          Authorization: "Basic " + Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64'),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const data = await spotifyResponse.data;
    const { access_token, refresh_token } = data;
  
    // Store the tokens in the session
    req.session.access_token = access_token;
    req.session.refresh_token = refresh_token;
  
    console.log("TOKEN:      "+req.session.access_token)
    res.redirect("/recommendations")
  } 
  catch (error) {
    console.log(error)
    res.redirect('/');
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);

console.log(`Server listening on ${port}`);