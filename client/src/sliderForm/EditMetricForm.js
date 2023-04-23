import { useState } from 'react';
import { Slider, Typography, Box, Grid, Button, Tooltip } from '@mui/material';


export function EditMetricForm() {

  //let Data = data.data.liveness
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