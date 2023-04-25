import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import "./recommendations.css"
import tastemaker_logo from "../images/tastemaker_logo.svg"
import PlaylistInputForm from "./playlist_input_form"
import SongArtistDisplay from "./song_artist_display";
import { EditMetricForm } from "../SliderForm/EditMetricForm";
import { StreamGraph } from "../StreamGraph/StreamGraph";
import Data from './sampleData.json'

export default function Recommendations() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const authorizationCode = params.get('authorizationCode');

    const [song_names, set_song_names] = useState([])
    const [artist_names, set_artist_names] = useState([])
    const [playlist_id, set_playlist_id] = useState('')
    const [track_ids, set_track_ids] = useState([])
    const [acousticness, set_acousticness] = useState(0)
    const [danceability, set_danceability] = useState(0)
    const [energy, set_energy] = useState(0)
    const [instrumentalness, set_instrumentalness] = useState(0)
    const [liveness, set_liveness] = useState(0)
    const [loudness, set_loudness] = useState(0)
    const [speechiness, set_speechiness] = useState(0)
    const [tempo, set_tempo] = useState(0)
    const [valence, set_valence] = useState(0)


    const handleSongsUpdate = (newData) => {
        set_song_names(newData)
    }

    const handleArtistsUpdate = (newData) => {
        set_artist_names(newData)
    }

    const handleIdsUpdate = (newData) => {
        set_track_ids(newData)
    }

    const handleListIdUpdate = (newData) => {
        set_playlist_id(newData)
    }

    const handleAcousticnessUpdate = (newData) => {
        set_acousticness(newData)
    }

    const handleDanceabilityUpdate = (newData) => {
        set_danceability(newData)
    }

    const handleEnergyUpdate = (newData) => {
        set_energy(newData)
    }

    const handleInstrumentalnessUpdate = (newData) => {
        set_instrumentalness(newData)
    }

    const handleLivenessUpdate = (newData) => {
        set_liveness(newData)
    }

    const handleLoudnessUpdate = (newData) => {
        set_loudness(newData)
    }

    const handleSpeechinessUpdate = (newData) => {
        set_speechiness(newData)
    }

    const handleTempoUpdate = (newData) => {
        set_tempo(newData)
    }

    const handleValenceUpdate = (newData) => {
        set_valence(newData)
    }

    let averageMetricData = {
        'valence': valence,
        'danceability': danceability,
        'acousticness': acousticness,
        'instrumentalness':instrumentalness,
        'speechiness': speechiness,
        'energy': energy,
        'liveness': liveness
    }

    const createPlaylist = (authCode, ids) => {
        // Create playlist endpoint
        const endpoint = 'https://api.spotify.com/v1/me/playlists';

        // Create playlist request body
        const requestBody = {
            name: 'Your Tastemaker Playlist', // Replace with your desired playlist name
            public: true, // Set to true if you want the playlist to be public, false if private
            description: 'Your custom playlist, consider your tastes made', // Replace with your desired playlist description
            tracks: ids.map(id => ({ uri: `spotify:track:${id}` })) // Convert track IDs to Spotify track URIs
        };

        // Make POST request to create playlist
        fetch(endpoint, {
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${authCode}`,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create playlist');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Access the response data, which includes the created playlist information
        })
        .catch(error => {
            console.error(error); // Handle any errors that may occur during the API request
        });
    }

    return (
        <>
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
                        onAcousticnessUpdate={handleAcousticnessUpdate}
                        onDanceabilityUpdate={handleDanceabilityUpdate}
                        onEnergyUpdate={handleEnergyUpdate}
                        onInstrumentalnessUpdate={handleInstrumentalnessUpdate}
                        onLivenessUpdate={handleLivenessUpdate}
                        onLoudnessUpdate={handleLoudnessUpdate}
                        onSpeechinessUpdate={handleSpeechinessUpdate}
                        onTempoUpdate={handleTempoUpdate}
                        onValenceUpdate={handleValenceUpdate}
                    />
                </div>
            </div>
            <div className="main">
                <div className="box">
                    <h1 className="box_title">Your Tastemaker Playlist</h1>
                    {song_names.map((item, index) => {
                        return (
                            <SongArtistDisplay key={index} song={item} artist={artist_names[index]} />
                        );
                    })}
                </div>
                <div className="box2">
                    <h1 className="box_title">Modify Your Playlist</h1>
                    <div className="metricForm">
                        <EditMetricForm
                            liveness={liveness}
                            loudness={loudness}
                            tempo={tempo}
                            id={playlist_id}
                            energy={energy}
                            danceability={danceability}
                            valence={valence}
                            instrumentalness={instrumentalness}
                            acousticness={acousticness}
                            speechiness={speechiness}
                            onSongsUpdate={handleSongsUpdate}
                            onArtistsUpdate={handleArtistsUpdate}
                            onIdsUpdate={handleIdsUpdate}
                            onListIdUpdate={handleListIdUpdate}
                            onAcousticnessUpdate={handleAcousticnessUpdate}
                            onDanceabilityUpdate={handleDanceabilityUpdate}
                            onEnergyUpdate={handleEnergyUpdate}
                            onInstrumentalnessUpdate={handleInstrumentalnessUpdate}
                            onLivenessUpdate={handleLivenessUpdate}
                            onLoudnessUpdate={handleLoudnessUpdate}
                            onSpeechinessUpdate={handleSpeechinessUpdate}
                            onTempoUpdate={handleTempoUpdate}
                            onValenceUpdate={handleValenceUpdate}/>
                    </div>
                </div>
            </div>
            <div>
                <button className="make_playlist" onClick={() => createPlaylist(authorizationCode, track_ids)}>Add Playlist to Library</button>
            </div>
            <StreamGraph
                data={Data}
                // valence={valence}
                // danceability={danceability}
                // acousticness={acousticness}
                // instrumentalness={instrumentalness}
                // speechiness={speechiness}
                // energy={energy}
                // liveness={liveness}
                />
        </>
    )
}