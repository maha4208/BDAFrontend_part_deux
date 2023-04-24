import React, {useState, useEffect} from "react"
import "./recommendations.css"
const url = require('url-parse');




export default function PlaylistInputForm ({
    songs,
    artists,
    ids,
    list_id,
    onSongsUpdate,
    onArtistsUpdate,
    onIdsUpdate,
    onListIdUpdate,
}) {
    
    const [playlist_id, setPlaylist_id] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function handlePlaylistChange(event) {
        setPlaylist_id(event.target.value);
    }

    function handleSubmit(event) { 
        
        event.preventDefault()
        setIsLoading(true)
        
        // this formulates our request
        const spotifyUrl = new url(playlist_id)
        console.log(spotifyUrl);
        const path = spotifyUrl.pathname; 
        const id = path.split('/').pop();
        console.log(id)
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
                console.log(data)
                onSongsUpdate(data.new_playlist.name)
                onArtistsUpdate(data.new_playlist.artist)
                onIdsUpdate(data.new_playlist.id)
                onListIdUpdate(data.user_playlist_id)
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