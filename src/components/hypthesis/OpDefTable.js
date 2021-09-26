import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TableBody,
  Paper
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import OpDefRow from './OpDefRow';

const OpDefTable = ({ opDefs }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Term</TableCell>
            <TableCell>Definition</TableCell>
            <TableCell>
              <Button>
                <AddIcon />
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {opDefs.map(opDef => <OpDefRow opDef={opDef} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OpDefTable;
