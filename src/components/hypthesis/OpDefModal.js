import { Grid, Button, TextField, Modal, Paper } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '50vw',
  p: 5,
};

const OpDefModal = ({ open, onClose, opDef, onChange, onSave }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Paper sx={style}>
        <Grid container direction="column" spacing={2}>
          <Grid item sx={{ marginLeft: 'auto' }}>
            <Button onClick={onClose}>
              <ClearIcon />
            </Button>
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Term"
              variant="standard"
              fullWidth
              value={opDef.term}
              onChange={e => onChange({ term: e.target.value})}
            />
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Definition"
              variant="standard"
              fullWidth
              value={opDef.def}
              onChange={e => onChange({ def: e.target.value })}
            />
          </Grid>
          <Grid item sx={{ marginLeft: 'auto' }}>
            <Button onClick={onSave}>Done</Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default OpDefModal;
