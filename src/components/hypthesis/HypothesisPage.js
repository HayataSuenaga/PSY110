import { Grid, Button, Card, TextField, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { hypothesis as hypothesisText } from '../../data/texts';
import { useState } from 'react';

import OpDefModal from './OpDefModal';
import OpDefTable from './OpDefTable';

import { updateHypothesis, addOpDef, deleteOpDef, updateOpDef } from '../../store/experiment';

const HypothesisPage = () => {
  const opDefs = useSelector(state => state.opDefs);
  const hypothesis = useSelector(state => state.hypothesis);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [chosenDef, setChosenDef] = useState({});

  const onHypothesisChange = hypothesis => dispatch(updateHypothesis({ hypothesis }))

  const onSelect = def => {
    console.log(def);
    setChosenDef(def);
    setOpen(true);
  };

  const onChange = change => setChosenDef({ ...chosenDef, ...change });

  const onSave = () => {
    if (chosenDef.id === undefined) dispatch(addOpDef(chosenDef));
    else dispatch(updateOpDef(chosenDef));
    setOpen(false);
  };

  const onDelete = id => dispatch(deleteOpDef({ id }));
  const onClose = id => setOpen(false);

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Card sx={{ p: 2 }}>
            <Typography variant="body2">{hypothesisText}</Typography>
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
            value={hypothesis}
            onChange={e => onHypothesisChange(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Card sx={{ p: 2 }}>
            <Typography variant="body2">{hypothesisText}</Typography>
          </Card>
        </Grid>
        <Grid item>
          <OpDefTable opDefs={opDefs} onSelect={onSelect} onDelete={onDelete} />
        </Grid>
      </Grid>
      <OpDefModal open={open} onClose={onClose} opDef={chosenDef} onChange={onChange} onSave={onSave} />
    </>
  );
};

export default HypothesisPage;
