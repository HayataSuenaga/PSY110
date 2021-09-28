import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@mui/material';
import VariableRow from './VariableRow';

const blankVariable = {
  id: undefined,
  type: 'dependent',
  name: 'fuck fuck fuck',
  description: 'fuck fuck fuck',
};

const VariableTable = ({ variables, setOpen, onSelect, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Variable type</TableCell>
            <TableCell>Variable name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>
              <Button onClick={() => {
                onSelect(blankVariable);
                setOpen(true);
              }}>
                Add
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {variables.map((variable, index) => (
            <VariableRow
              key={index}
              variable={variable}
              setOpen={setOpen}
              onSelect={onSelect}
              onDelete={onDelete}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VariableTable;
