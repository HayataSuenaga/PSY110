import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TableBody,
  Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import OpDefRow from './OpDefRow';

const getBlankDef = () => ({
  id: undefined,
  term: '',
  def: '',
});

const OpDefTable = ({ opDefs, onSelect, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Term</TableCell>
            <TableCell>Definition</TableCell>
            <TableCell>
              <Button>
                <AddIcon onClick={() => onSelect(getBlankDef())} />
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {opDefs.map((opDef, index) => (
            <OpDefRow
              key={index}
              opDef={opDef}
              onSelect={onSelect}
              onDelete={onDelete}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OpDefTable;
