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

// A default variable for a new variable creation
const getBlankVariable = () => ({
  id: undefined,
  type: 'independent',
  name: '',
  description: ''
});

const VariableTable = ({ variables, onSelect, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Variable type</TableCell>
            <TableCell>Variable name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell sx={{textAlign: "end"}}>
              <Button onClick={() => onSelect(getBlankVariable())}>
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
