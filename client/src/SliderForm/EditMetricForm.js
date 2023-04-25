import { useEffect, useState } from 'react';
import { Slider, Typography, Box, Grid, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';



export function EditMetricForm(props) {

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
    const formData = JSON.stringify({
      liveness: liveness,
      energy: energy,
      danceability: danceability,
      valence: valence,
      instrumentalness: instrumentalness,
      acousticness: acousticness,
      speechiness: speechiness
    });
    console.log(formData)

    //add post fetch here
  }

  return (
    <Box>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography id="input-slider" gutterBottom>
            Liveness: {liveness}
          </Typography>
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
          <Typography id="input-slider" gutterBottom>
            Energy: {energy}
          </Typography>
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
          <Typography id="input-slider" gutterBottom>
            Danceability: {danceability}
          </Typography>
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
          <Typography id="input-slider" gutterBottom>
            Valence: {danceability}
          </Typography>
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
          <Typography id="input-slider" gutterBottom>
            Instrumentalness: {instrumentalness}
          </Typography>
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
          <Typography id="input-slider" gutterBottom>
            Speechiness: {speechiness}
          </Typography>
          <Slider
            value={speechiness}
            onChange={handleSpeechinessChange}
            min={0}
            max={1}
            step={0.1}
            aria-labelledby="input-slider"
            color="info"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography id="input-slider" gutterBottom>
            Acousticness: {acousticness}
          </Typography>
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