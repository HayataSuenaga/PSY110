import { useState } from 'react';

import {
  List,
  Grid,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Button,
  TableBody,
  Paper,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useSelector } from 'react-redux';
import ConfoundRow from './ConfoundRow';
import ConfoundEdit from './ConfoundEdit';

import { deleteConfound } from '../../store/experiment';
import Confound from './Confound';

const ConfoundTable = () => {
  const confounds = useSelector(state => state.confounds);
  const [editing, setEditing] = useState(undefined);

  return (
    <List component={Paper}>
      <ListItem>
        <Grid container>
          <Grid item xs={4}>
            <Typography>Confounds</Typography>
          </Grid>
          <Grid item xs={7} sx={{ pl: 2 }}>
            <Typography>Preventive Measure</Typography>
          </Grid>
        </Grid>
      </ListItem>
      {confounds.map(confound => (
        <ListItem key={confound.id}>
          {confound.id === editing ? (
            <ConfoundEdit confound={confound} setEditing={setEditing} />
          ) : (
            <Confound confound={confound} setEditing={setEditing} />
          )}
        </ListItem>
      ))}
      <ListItem>
        {editing === 0 ? (
          <ConfoundEdit setEditing={setEditing} />
        ) : (
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <IconButton onClick={() => setEditing(0)}>
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
        )}
      </ListItem>
    </List>
    // <TableContainer component={Paper}>
    //   <Table>
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Confound</TableCell>
    //         <TableCell>Preventive measure</TableCell>
    //         <TableCell>
    //           <Button>
    //             <AddIcon />
    //           </Button>
    //         </TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {confounds.map((confound, index) => <ConfoundRow key={index} confound={confound} />)}
    //     </TableBody>
    //   </Table>
    // </TableContainer> */}
  );
};

export default ConfoundTable;
