import { useEffect, useState } from 'react';
import { Slider, Typography, Box, Grid, Button, Tooltip } from '@mui/material';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';



export function EditMetricForm(props) {

  const loudness = props.loudness
  const tempo = props.tempo
  const original_id =props.id
  const [liveness, setLiveness] = useState(props.liveness);
  const [energy, setEnergy] = useState(props.energy);
  const [danceability, setDanceability] = useState(props.danceability);
  const [valence, setValence] = useState(props.valence);
  const [instrumentalness, setInstrumentalness] = useState(props.instrumentalness);
  const [acousticness, setAcousticness] = useState(props.acousticness)
  const [speechiness, setSpeechiness] = useState(props.speechiness)

  useEffect(() => {
    setLiveness(props.liveness);
    setEnergy(props.energy);
    setDanceability(props.danceability);
    setValence(props.valence);
    setInstrumentalness(props.instrumentalness);
    setAcousticness(props.acousticness);
    setSpeechiness(props.speechiness);
  }, [props]);

  const handleLivenessChange = (event, newValue) => {
    setLiveness(newValue);
    props.onLivenessUpdate(newValue)
  };

  const handleEnergyChange = (event, newValue) => {
    setEnergy(newValue);
    props.onEnergyUpdate(newValue)
  };

  const handleDanceabilityChange = (event, newValue) => {
    setDanceability(newValue);
    props.onDanceabilityUpdate(newValue)
  };

  const handleValenceChange = (event, newValue) => {
    setValence(newValue);
    props.onValenceUpdate(newValue)
  };

  const handleInstrumentalnessChange = (event, newValue) => {
    setInstrumentalness(newValue);
    props.onInstrumentalnessUpdate(newValue)
  };

  const handleSpeechinessChange = (event, newValue) => {
    setSpeechiness(newValue);
    props.onSpeechinessUpdate(newValue)
  };

  const handleAcousticnessChange = (event, newValue) => {
    setAcousticness(newValue);
    props.onAcousticnessUpdate(newValue)
  };

  const handleButtonClick = () => {
    const request = "http://127.0.0.1:8080/metrics?original_id="+original_id+"&valence="+valence+"&danceability="+danceability+"&instrumentalness="+instrumentalness+"&acousticness="+acousticness+"&liveness="+liveness+"&energy="+energy+"&loudness="+loudness+"&tempo="+tempo+"&speechiness="+speechiness
    console.log(request)

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    fetch(request, options)
    .then (response => {
      if(!response.ok) {
        throw new Error("fetch failed")
      }
      else{
        return response.clone().json()
      }
    })
    .then (data => {
      console.log(data)
      props.onMetricUpdate(props.convertJsonToList(data.new_playlist))
      props.onSongsUpdate(data.new_playlist.name)
      props.onArtistsUpdate(data.new_playlist.artist)
      props.onIdsUpdate(data.new_playlist.id)
      props.onListIdUpdate(data.user_playlist_id)
      props.onAcousticnessUpdate(data.sum_metrics.acousticness)
      props.onDanceabilityUpdate(data.sum_metrics.danceability)
      props.onEnergyUpdate(data.sum_metrics.energy)
      props.onInstrumentalnessUpdate(data.sum_metrics.instrumentalness)
      props.onLivenessUpdate(data.sum_metrics.liveness)
      props.onLoudnessUpdate(data.sum_metrics.loudness)
      props.onSpeechinessUpdate(data.sum_metrics.speechiness)
      props.onTempoUpdate(data.sum_metrics.speechiness)
      props.onValenceUpdate(data.sum_metrics.valence)
    })
    .catch(e => {
      console.error(e)
    })
  }

  return (
    <Box>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Tooltip title="presence of an audience in the recording" arrow>
            <Typography id="input-slider" gutterBottom>
              Liveness: {liveness}
            </Typography>
          </Tooltip>
          <Slider
            value={liveness}
            onChange={handleLivenessChange}
            min={0}
            max={1}
            step={0.1}
            aria-labelledby="input-slider"
            color='primary'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Tooltip title="represents a perceptual measure of intensity and activity" arrow>
            <Typography id="input-slider" gutterBottom>
              Energy: {energy}
            </Typography>
          </Tooltip>
          <Slider
            value={energy}
            onChange={handleEnergyChange}
            min={0}
            max={1}
            step={0.1}
            aria-labelledby="input-slider"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Tooltip title="how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity" arrow>
            <Typography id="input-slider" gutterBottom>
              Danceability: {danceability}
            </Typography>
          </Tooltip>
          <Slider
            value={danceability}
            onChange={handleDanceabilityChange}
            min={0}
            max={1}
            step={0.1}
            aria-labelledby="input-slider"
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Tooltip title="musical positiveness conveyed by a track" arrow>
            <Typography id="input-slider" gutterBottom>
              Valence: {valence}
            </Typography>
          </Tooltip>
          <Slider
            value={valence}
            onChange={handleValenceChange}
            min={0}
            max={1}
            step={0.1}
            aria-labelledby="input-slider"
            color="error"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Tooltip title="predicts whether a track contains no vocals" arrow>
            <Typography id="input-slider" gutterBottom>
              Instrumentalness: {instrumentalness}
            </Typography>
          </Tooltip>
          <Slider
            value={instrumentalness}
            onChange={handleInstrumentalnessChange}
            min={0}
            max={1}
            step={0.1}
            aria-labelledby="input-slider"
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Tooltip title="presence of spoken words in a track" arrow>
            <Typography id="input-slider" gutterBottom>
              Speechiness: {speechiness}
            </Typography>
          </Tooltip>
          <Slider
            value={speechiness}
            onChange={handleSpeechinessChange}
            min={0}
            max={1}
            step={0.1}
            aria-labelledby="input-slider"
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Tooltip title="presence of an acoustic instrument and voices" arrow>
            <Typography id="input-slider" gutterBottom>
              Acousticness: {acousticness}
            </Typography>
          </Tooltip>
          <Slider
            value={acousticness}
            onChange={handleAcousticnessChange}
            min={0}
            max={1}
            step={0.1}
            aria-labelledby="input-slider"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="outlined" sx={{ width: '100%', maxWidth: 200 }}
            onClick={handleButtonClick}>
            Re Roll
          </Button>
        </Grid>
      </Grid>
    </Box>

  );
}