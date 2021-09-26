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
  const { open, handleClose } = props;
  const [type, setType] = useState(VariableType.independent);
  const [variableName, setVariableName] = useState('');
  const [explanation, setExplanation] = useState('');
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
              value={variableName}
              onChange={e => setVariableName(e.target.value)}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              label="explanation"
              value={explanation}
              onChange={e => setExplanation(e.target.value)}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item sx={{ marginLeft: 'auto' }}>
            <Button onClick={handleClose}>Done</Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default VariableModal;
