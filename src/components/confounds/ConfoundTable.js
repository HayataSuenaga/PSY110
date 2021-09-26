import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Button,
  TableBody,
  Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import ConfoundRow from './ConfoundRow';

const ConfoundTable = ({ confounds }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Confound</TableCell>
            <TableCell>Preventive measure</TableCell>
            <TableCell>
              <Button>
                <AddIcon />
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {confounds.map(confound => (
            <ConfoundRow confound={confound} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConfoundTable;
