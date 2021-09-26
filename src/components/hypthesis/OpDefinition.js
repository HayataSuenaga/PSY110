import { Grid, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const OpDefinition = ({ opDef }) => {
  return (
    <Grid container justifyContent="space-between">
      <Grid item>{opDef.term}</Grid>
      <Grid item>{opDef.def}</Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <Button>
              <EditIcon />
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <DeleteIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OpDefinition;
