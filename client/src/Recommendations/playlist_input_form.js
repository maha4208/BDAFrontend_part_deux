import React, {useState} from "react"
import "./recommendations.css"



export default function PlaylistInputForm () {
    
    const [playlist_id, setPlaylist_id] = useState('');

    function handlePlaylistChange(event) {
        setPlaylist_id(event.target.value);
    }

    function handleSubmit(event) { 
    
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