import { Grid, Button, TextField } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

const EditOpDefinition = () => {
  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <TextField id="standard-basic" label="Term" variant="standard" />
      </Grid>
      <Grid item>
        <TextField id="standard-basic" label="Definition" variant="standard" />
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <Button>
              <DoneIcon />
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <ClearIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditOpDefinition;