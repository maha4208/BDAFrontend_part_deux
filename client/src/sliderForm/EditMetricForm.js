import { useState } from 'react';
import { Slider, Typography, Box, Grid, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';



export function EditMetricForm() {

  const [liveness, setLiveness] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [danceability, setDanceability] = useState(0);
  const [valence, setValence] = useState(0);
  const [instrumentalness, setInstrumentalness] = useState(0);
  const [acousticness, setAcousticness] = useState(0)
  const [speechiness, setSpeechiness] = useState(0)
  

  const handleLivenessChange = (event, newValue) => {
    setLiveness(newValue);
  };

  const handleEnergyChange = (event, newValue) => {
    setEnergy(newValue);
  };

  const handleDanceabilityChange = (event, newValue) => {
    setDanceability(newValue);
  };

  const handleValenceChange = (event, newValue) => {
    setValence(newValue);
  };

  const handleInstrumentalnessChange = (event, newValue) => {
    setInstrumentalness(newValue);
  };

  const handleSpeechinessChange = (event, newValue) => {
    setSpeechiness(newValue);
  };

  const handleAcousticnessChange = (event, newValue) => {
    setAcousticness(newValue);
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
      <Grid container spacing={3} alignItems="center">
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
            color="primary"
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