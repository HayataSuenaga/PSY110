import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button
} from '@mui/material';
import Variable from './VariableRow';

const VariableTable = ({ variables }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Variable type</TableCell>
            <TableCell>Variable name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>
              <Button>Add</Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {variables.map((variable, index) => (
            <Variable variable={variable} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VariableTable;
