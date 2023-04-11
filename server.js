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


async function makePlaylist(name, token){
  try {
    const makePlaylist =  await axios({
      url: 'https://api.spotify.com/v1/users/31jw67tlufhi45o34aoxkwr7fgsu/playlists',
      method: 'post',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      data:{
        'name': name,
        'description': 'Taste Maker Generated Playlist',
        'public': true,
      } // include the request body as the 'data' property
    });
    return (makePlaylist.data.id)
  } catch (error) {
    console.log('error')
  }
}

async function addToPlaylist(playlistId,tracks,token){
  //need to see how ellie formats the returned song id's
  const track_uris = [
    'spotify:track:3yFbGwntwrdfN9JJWvGejk',
    // 'spotify:track:3YBZIN3rekqsKxbJc9FZko',
    // 'spotify:track:6i0V12jOa3mr6uu4WYhUBr'
  ];

  const requestBody = {
    uris: track_uris
  };

  try {
    let addSong = await axios({
      method: 'post',
      url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      data: requestBody,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
      
    });
    return addSong.data
  } catch (error) {
    console.log('add playlist error', error)
  }
}

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


//make a playlist will take songs and playlist name and create everything instead of 2 endpoints
app.get("/makePlaylist/:playlistName/:songs", async(req,res) => {
  const id = await (makePlaylist(req.params.playlistName, req.session.access_token))
  const addSongs = await addToPlaylist(id,req.params.songs, req.session.access_token)
  res.send(id)
})

//gets song id's from a playlist and returns an id string
app.get("/getPlaylistTracks/:idn", async (req, res) => {
  try {
    const playlistData = await axios.get(
      "https://api.spotify.com/v1/playlists/" + req.params.id + "/tracks",
      {
        headers: {
          Authorization: "Bearer " + req.session.access_token,
        },
      }
    );

    //get id string from playlist songs
    let idsArr = []
    let count = 0;
    for (const data of playlistData.data.items) {
      if(count === 99) {break;}
      if (data.track.id != undefined) {
        idsArr.push(data.track.id)
      }
    }
    let IdString = idsArr.join('%2C')

    //Get song features
    const songFeatures = await axios.get(
      "https://api.spotify.com/v1/audio-features?ids=" + IdString,
      {
        headers: {
          Authorization: "Bearer " + req.session.access_token,
        },
      }
    );

    //filter song features
    let songVariables = []
    const sData = songFeatures.data.audio_features
    for (let s = 0; s < sData.length; s++) {
      let songD = {
        id: sData[s].id,
        danceability: sData[s].danceability,
        energy: sData[s].energy,
        key: sData[s].key,
        loudness: sData[s].loudness,
        speechiness: sData[s].speechiness,
        acousticness: sData[s].acousticness,
        instrumentalness: sData[s].instrumentalness,
        liveness: sData[s].liveness,
        valence: sData[s].valence,
        tempo: sData[s].tempo
      }
      songVariables.push(songD)
    }
    res.send(songVariables)
  }

  catch (error) {
    res.status(500).send(error);
  }
})



app.listen(port);

console.log(`Server listening on ${port}`);