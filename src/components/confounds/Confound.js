import { Grid, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteConfound } from '../../store/experiment';

const Confound = ({ confound, setEditing }) => {
  const dispatch = useDispatch();

  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography>{confound.name}</Typography>
      </Grid>
      <Grid item xs={7} sx={{ pl: 2 }}>
        <Typography>{confound.measure}</Typography>
      </Grid>
      <Grid item xs={1} sx={{ textAlign: 'right' }}>
        <IconButton
          onClick={() => {
            console.log(confound.id);
            setEditing(confound.id);
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => dispatch(deleteConfound({ id: confound.id }))}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Confound;
