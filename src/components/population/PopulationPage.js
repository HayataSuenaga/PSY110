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
import { useDispatch, useSelector } from 'react-redux';

import { populationText } from '../../data/texts';

import {
  updatePopulation,
  updateSamplingMethod,
  updateSample,
} from '../../store/experiment';

const Method = {
  convenience: 'convenience',
  random: 'random',
};

const PopulationPage = () => {
  const population = useSelector(state => state.population);
  const samplingMethod = useSelector(state => state.samplingMethod);
  const sample = useSelector(state => state.sample);
  const dispatch = useDispatch();

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Paper sx={{ p: 2 }}>
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
            value={population}
            onChange={e =>
              dispatch(updatePopulation({ population: e.target.value }))
            }
          />
        </Grid>
        <Grid item>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Sampling Method</InputLabel>
            <Select
              value={samplingMethod}
              onChange={e =>
                dispatch(
                  updateSamplingMethod({ samplingMethod: e.target.value })
                )
              }
            >
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
            value={sample}
            onChange={e => dispatch(updateSample({ sample: e.target.value }))}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PopulationPage;
