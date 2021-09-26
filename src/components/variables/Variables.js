import { Button } from '@mui/material';
import { useState } from 'react';
import Popup from './Popup';
import EditVariable from './Temp';
import VariableTable from './Home';

const Variables = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Popup</Button>
      <Popup open={open} handleClose={() => setOpen(false)} />
      <EditVariable />
      <VariableTable />
    </>
  );
};

export default Variables;
