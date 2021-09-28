import {
  Modal,
  Grid,
  TextField,
  Chip,
  Paper,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '50vw',
  p: 5,
};

const VariableType = {
  independent: 'independent',
  dependent: 'dependent',
};

const VariableModal = props => {
  const { variable, open, handleClose, onSave } = props;
  console.log('variable', variable);
  const [type, setType] = useState(variable.type);
  const [name, setName] = useState(variable.name);
  const [description, setDescription] = useState(variable.description);
  const toggleType = () =>
    setType(
      type === VariableType.dependent
        ? VariableType.independent
        : VariableType.dependent
    );
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
                <Chip label={type} onClick={toggleType} />
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
              value={name}
              onChange={e => setName(e.target.value)}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              label="explanation"
              value={description}
              onChange={e => setDescription(e.target.value)}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item sx={{ marginLeft: 'auto' }}>
            <Button
              onClick={() => {
                handleClose();
                onSave(variable.id, type, name, description);
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
