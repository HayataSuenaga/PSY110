import { useSelector } from 'react-redux';
import { Box, Card, Typography, Paper, TableHead } from '@mui/material';

import ExpTable from './ExpTable';

const Result = () => {
  const hypothesis = useSelector(state => state.hypothesis);
  const opDefs = useSelector(state => state.opDefs);
  const variables = useSelector(state => state.variables);
  const population = useSelector(state => state.population);
  const samplingMethod = useSelector(state => state.samplingMethod);
  const sample = useSelector(state => state.sample);
  const confounds = useSelector(state => state.confounds);

  return (
    <Box>
      <Typography variant="h6">Hypothesis</Typography>
      <Paper sx={{ p: 2, my: 2 }}>
        <Card sx={{ p: 2, mb: 2, typography: 'body1' }}>{hypothesis}</Card>
        <ExpTable items={opDefs} />
      </Paper>
      <Typography variant="h6">Variables</Typography>
      <Paper sx={{ p: 2, my: 2 }}>
        <ExpTable items={variables} />
      </Paper>
      <Typography variant="h6">Population</Typography>
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography>{`Population: ${population}`}</Typography>
        <Typography>{`Sampling Method: ${samplingMethod}`}</Typography>
        <Typography>{`Sample: ${sample}`}</Typography>
      </Paper>
      <Typography variant="h6">Confounds</Typography>
      <Paper sx={{ p: 2, my: 2 }}>
        <ExpTable items={confounds} />
      </Paper>
    </Box>
  );
};

export default Result;
