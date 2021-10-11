import { Grid, IconButton, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { addConfound, updateConfound } from '../../store/experiment';
import { useState } from 'react';

const ConfoundEdit = ({ confound, setEditing }) => {
  const [name, setName] = useState(confound ? confound.name : '');
  const [measure, setMeasure] = useState(confound ? confound.measure : '');
  const dispatch = useDispatch();

  const onSave = () => {
    if (confound) dispatch(updateConfound({ name, measure }));
    else dispatch(addConfound({ name, measure }));
    setEditing(undefined);
  };

  return (
    <Grid container>
      <Grid item xs={4}>
        <TextField
          value={name}
          variant="standard"
          fullWidth
          onChange={e => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={7} sx={{pl: 2}}>
        <TextField
          value={measure}
          variant="standard"
          fullWidth
          onChange={e => setMeasure(e.target.value)}
        />
      </Grid>
      <Grid item xs={1} sx={{ textAlign: 'right' }}>
        <IconButton onClick={onSave}>
          <CheckIcon />
        </IconButton>
        <IconButton onClick={() => setEditing(undefined)}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ConfoundEdit;
