import { Grid, Paper, Typography } from '@mui/material';

import { confoundText } from '../../Texts';
import ConfoundTable from './ConfoundTable';

const createConfound = (name, measure) => ({ name, measure });
const confounds = [
  createConfound(
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices felis vitae convallis mattis. Aliquam rutrum tincidunt nibh tempor porttitor.'
  ),
  createConfound(
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices felis vitae convallis mattis. Aliquam rutrum tincidunt nibh tempor porttitor.'
  ),
];

const ConfoundPage = () => {
  return (
    <Grid container direction="column" sx={{ p: 2 }} spacing={2}>
      <Grid item>
        <Paper sx={{ p: 2 }}>
          <Typography variant="body2">{confoundText}</Typography>
        </Paper>
      </Grid>
      <Grid item>
        <ConfoundTable confounds={confounds} />
      </Grid>
    </Grid>
  );
};

export default ConfoundPage;
