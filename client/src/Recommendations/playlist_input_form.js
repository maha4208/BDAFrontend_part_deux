import React, {useState, useEffect} from "react"
import "./recommendations.css"
const url = require('url-parse');


export default function PlaylistInputForm ({
    songs,
    artists,
    ids,
    list_id,
    acousticness,
    danceability,
    energy,
    instrumentalness,
    liveness,
    loudness,
    speechiness,
    tempo,
    valence,
    onSongsUpdate,
    onArtistsUpdate,
    onIdsUpdate,
    onListIdUpdate,
    onAcousticnessUpdate,
    onDanceabilityUpdate,
    onEnergyUpdate,
    onInstrumentalnessUpdate,
    onLivenessUpdate,
    onLoudnessUpdate,
    onSpeechinessUpdate,
    onTempoUpdate,
    onValenceUpdate,
    onMetricUpdate,
    convertJsonToList
}) {
    
    const [playlist_id, setPlaylist_id] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function handlePlaylistChange(event) {
        setPlaylist_id(event.target.value);
    }

    // function convertJsonToList(json) {
    //     const keys = Object.keys(json);
    //     const numElements = json[keys[0]].length;
    //     const result = [];
      
    //     for (let i = 0; i < numElements; i++) {
    //       const obj = {};
    //       for (let j = 0; j < keys.length; j++) {
    //         obj[keys[j]] = json[keys[j]][i];
    //       }
    //       result.push(obj);
    //     }
      
    //     return result;
    //   }

    function handleSubmit(event) { 
        
        event.preventDefault()
        setIsLoading(true)
        
        // this formulates our request
        const spotifyUrl = new url(playlist_id)
        console.log(spotifyUrl);
        const path = spotifyUrl.pathname; 
        const id = path.split('/').pop();
        console.log(id)
        //d=<id>&token=<token
        const request = "http://127.0.0.1:8080/playlist/"+id
        console.log(request)


        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }
        };
        //making the request
        fetch(request, options)
            .then (response => {
                if(!response.ok) {
                    throw new Error("fetch failed")
                }
                else{
                    return response.json()
                }
            })
            .then (data => {
                onMetricUpdate(convertJsonToList(data.new_playlist))
                onSongsUpdate(data.new_playlist.name)
                onArtistsUpdate(data.new_playlist.artist)
                onIdsUpdate(data.new_playlist.id)
                onListIdUpdate(data.user_playlist_id)
                onAcousticnessUpdate(data.sum_metrics.acousticness)
                onDanceabilityUpdate(data.sum_metrics.danceability)
                onEnergyUpdate(data.sum_metrics.energy)
                onInstrumentalnessUpdate(data.sum_metrics.instrumentalness)
                onLivenessUpdate(data.sum_metrics.liveness)
                onLoudnessUpdate(data.sum_metrics.loudness)
                onSpeechinessUpdate(data.sum_metrics.speechiness)
                onTempoUpdate(data.sum_metrics.speechiness)
                onValenceUpdate(data.sum_metrics.valence)
            })
            .catch (error => {
                console.error(error)
            })
    }

    return ( 
        <form className="my_form" onSubmit={handleSubmit}>
            <label className="playlist_label">
                Paste Spotify Playlist URL Here
            </label>
            <input className="playlist_input" type="text" value={playlist_id} onChange={handlePlaylistChange} />
            <button className="playlist_submit" type="submit">Submit</button>
        </form>
    )
}