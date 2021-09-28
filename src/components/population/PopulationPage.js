import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { populationText } from '../../data/texts';

const Method = {
  convenience: 'convenience',
  random: 'random',
};

const PopulationPage = () => {
  const [population, setPopulation] = useState('');
  const [method, setMethod] = useState('');
  const [sample, setSample] = useState('');

  const handleChange = event => setMethod(event.target.value);
  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Paper sx={{p: 2}}>
            <Typography variant="body2">{populationText}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <TextField
            label="Population"
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
            onChange={e => setPopulation(e.target.value)}
          />
        </Grid>
        <Grid item>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Sampling Method</InputLabel>
            <Select value={method} onChange={e => setMethod(e.target.value)}>
              <MenuItem value={Method.convenience}>
                Convenience Sampling
              </MenuItem>
              <MenuItem value={Method.random}>Random Sampling</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            label="Sample"
            variant="standard"
            fullWidth
            multiline
            onChange={e => setSample(e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PopulationPage;
