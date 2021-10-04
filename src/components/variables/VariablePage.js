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
  // Get the dispatch function from the store
  const dispatch = useDispatch();
  // Get the variables from the store
  const variables = useSelector(state => state.variables);
  // Dispatch actions when user saved a variable on modal
  const onSave = variable => {
    const { id, type, name, description } = chosenVariable;
    if (id === undefined) dispatch(addVariable(type, name, description));
    else dispatch(updateVariable(id, type, name, description));
  };
  // Handle user inputs on modal
  const onChange = change => {
    setChosenVariable({ ...chosenVariable, ...change });
  }
  // Dispatch the deleteVariable action when user deletes a variable
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
            onSelect={variable => {
              setChosenVariable(variable);
              setOpen(true);
            }}
            onDelete={onDelete}
          />
        </Grid>
      </Grid>
      <VariableModal
        open={open}
        handleClose={() => setOpen(false)}
        onChange={onChange}
        onSave={onSave}
        variable={chosenVariable}
      />
    </Box>
  );
};

export default Variables;
