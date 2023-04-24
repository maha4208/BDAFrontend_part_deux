import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom"
import "./recommendations.css"
import tastemaker_logo from "../images/tastemaker_logo.svg"
import PlaylistInputForm from "./playlist_input_form"

export default function Recommendations() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get('authorizationCode');

    const [song_names, set_song_names] = useState([])
    const [artist_names, set_artist_names] = useState([])
    const [playlist_id, set_playlist_id] = useState('')
    const [track_ids, set_track_ids] = useState([])

    const handleSongsUpdate = (newData) => {
        set_song_names(newData)
        console.log(song_names)
    }

    const handleArtistsUpdate = (newData) => {
        set_artist_names(newData)
        console.log(artist_names)
    }

    const handleIdsUpdate = (newData) => {
        set_track_ids(newData)
        console.log(track_ids)
    }

    const handleListIdUpdate = (newData) => {
        set_playlist_id(newData)
        console.log(playlist_id)
    }


    return (
        <div className="rec_header_and_input">
            <div className="mini_logo">
                <img src={tastemaker_logo} className="logo_2" alt="TASTEMAKER" />
            </div>
            <div className="playlist_input">
                <PlaylistInputForm 
                    songs={song_names} 
                    artists={artist_names} 
                    ids={track_ids} 
                    list_id={playlist_id} 
                    onSongsUpdate={handleSongsUpdate}
                    onArtistsUpdate={handleArtistsUpdate}
                    onIdsUpdate={handleIdsUpdate}
                    onListIdUpdate={handleListIdUpdate}
                />
            </div>
        </div>
    )
}