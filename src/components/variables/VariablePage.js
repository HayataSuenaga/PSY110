import { Button, Card, Typography, Grid, Box } from '@mui/material';
import { useState } from 'react';
import VariableModal from './VariableModal';
import VariableTable from './VariableTable';
import { variableText } from '../../Texts';

const VariableType = {
  independent: 'independent',
  dependent: 'dependent',
};
const variable1 = {
  name: 'Number of times a god barked',
  type: VariableType.dependent,
  description:
    'This variable measures the number of times a dog barked in ten minutes',
};
const variable2 = {
  name: 'Number of times a cat barked',
  type: VariableType.independent,
  description:
    'This variable measures the number of times a cat barked in ten minutes',
};
const variables = [variable1, variable2];

const Variables = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Card sx={{ p: 2 }}>
            <Typography variant="body2">{variableText}</Typography>
          </Card>
        </Grid>
        <Grid item>
          <VariableTable open={open} setOpen={setOpen} variables={variables} />
        </Grid>
      </Grid>
      <Button onClick={() => setOpen(true)}>Open Popup</Button>
      <VariableModal open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
};

export default Variables;
