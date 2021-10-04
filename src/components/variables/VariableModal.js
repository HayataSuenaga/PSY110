import { Modal, Grid, TextField, Chip, Paper, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

// Style for modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '50vw',
  p: 5,
};
// Enum for variable types
const VariableType = {
  independent: 'independent',
  dependent: 'dependent',
};
// This is a functional component
const VariableModal = props => {
  // Get all the props
  const { variable, open, handleClose, onSave, onChange } = props;
  // Function for toggling the variable type
  const toggleType = () => {
    if (variable.type === VariableType.independent)
      onChange({ type: VariableType.dependent });
    else onChange({ type: VariableType.independent });
  };
  // Return a modal
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper sx={style}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Grid
              container
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid item>
                <Chip label={variable.type} onClick={toggleType} />
              </Grid>
              <Grid item>
                <Button onClick={handleClose}>
                  <CloseIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              label="variable name"
              value={variable.name}
              onChange={e => onChange({ name: e.target.value })}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              label="explanation"
              value={variable.description}
              onChange={e => onChange({ description: e.target.value })}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item sx={{ marginLeft: 'auto' }}>
            <Button
              onClick={() => {
                handleClose();
                onSave(variable);
              }}
            >
              Done
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default VariableModal;
