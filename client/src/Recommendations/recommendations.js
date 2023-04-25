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

    const handleAcousticnessUpdate = (newData) => {
        set_acousticness(newData)
        console.log(acousticness)
    }

    const handleDanceabilityUpdate = (newData) => {
        set_danceability(newData)
        console.log(danceability)
    }

    const handleEnergyUpdate = (newData) => {
        set_energy(newData)
        console.log(energy)
    }

    const handleInstrumentalnessUpdate = (newData) => {
        set_instrumentalness(newData)
        console.log(instrumentalness)
    }

    const handleLivenessUpdate = (newData) => {
        set_liveness(newData)
        console.log(liveness)
    }

    const handleLoudnessUpdate = (newData) => {
        set_loudness(newData)
        console.log(loudness)
    }

    const handleSpeechinessUpdate = (newData) => {
        set_speechiness(newData)
        console.log(speechiness)
    }

    const handleTempoUpdate = (newData) => {
        set_tempo(newData)
        console.log(tempo)
    }

    const handleValenceUpdate = (newData) => {
        set_valence(newData)
        console.log(valence)
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