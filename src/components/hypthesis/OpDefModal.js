import { Grid, Button, TextField, Modal, Paper } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '50vw',
  p: 5,
};

const OpDefModal = ({ open, setOpen, opDef }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Paper sx={style}>
        <Grid container direction="column" spacing={2}>
          <Grid item sx={{marginLeft: 'auto'}}>
            <Button onClick={() => setOpen(false)}>
              <ClearIcon />
            </Button>
          </Grid>
          <Grid item>
            <TextField id="standard-basic" label="Term" variant="standard" fullWidth/>
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Definition"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item sx={{marginLeft: 'auto'}}>
            <Button onClick={() => setOpen(false)}>Done</Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default OpDefModal;
