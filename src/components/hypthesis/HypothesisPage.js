import { Grid, Button, Card, TextField, useTheme, Typography } from '@mui/material';

import OpDefModal from './OpDefModal';
import OpDefTable from './OpDefTable';

import { hypothesis } from '../../data/texts';
import { useState } from 'react';

const createOpDef = (term, def) => ({ term, def });
const opDefs = [
  createOpDef('Term1', 'This is the definition for Term1'),
  createOpDef('Term2', 'This is the definition for Term2'),
  createOpDef('Term3', 'This is the definition for Term3'),
];

const HypothesisPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Card sx={{ p: 2 }}>
            <Typography variant="body2">{hypothesis}</Typography>
          </Card>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="Your hypothesis"
            multiline
            minRows={4}
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item>
          <Card sx={{ p: 2 }}>
            <Typography variant="body2">{hypothesis}</Typography>
          </Card>
        </Grid>
        <Grid item>
          <OpDefTable opDefs={opDefs} />
        </Grid>
        <Grid item>
          <Button onClick={() => setOpen(true)}>Click Me!</Button>
        </Grid>
      </Grid>
      <OpDefModal open={open} setOpen={setOpen} />
    </>
  );
};

export default HypothesisPage;
