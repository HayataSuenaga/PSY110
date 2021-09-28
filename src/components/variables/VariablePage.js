import { Card, Typography, Grid, Box } from '@mui/material';
import { useState } from 'react';

import VariableModal from './VariableModal';
import VariableTable from './VariableTable';
import { variableText } from '../../data/texts';
import { useDispatch, useSelector } from 'react-redux';

import {
  addVariable,
  deleteVariable,
  updateVariable,
} from '../../store/experiment';

const Variables = () => {
  const [open, setOpen] = useState(false);
  const [chosenVariable, setChosenVariable] = useState({});

  const dispatch = useDispatch();
  const variables = useSelector(state => state.variables);

  const onSave = (id, type, name, description) => {
    if (id === undefined) dispatch(addVariable(type, name, description));
    else dispatch(updateVariable(id, type, name, description));
  };
  const onDelete = id => dispatch(deleteVariable(id));

  return (
    <Box>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Card sx={{ p: 2 }}>
            <Typography variant="body2">{variableText}</Typography>
          </Card>
        </Grid>
        <Grid item>
          <VariableTable
            open={open}
            setOpen={setOpen}
            variables={variables}
            onSelect={setChosenVariable}
            onDelete={onDelete}
          />
        </Grid>
      </Grid>
      <VariableModal
        open={open}
        handleClose={() => setOpen(false)}
        onSave={onSave}
        variable={chosenVariable}
      />
    </Box>
  );
};

export default Variables;
