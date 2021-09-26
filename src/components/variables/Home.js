import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Select,
  MenuItem,
  TextField
} from '@mui/material';
import Variable from './VariableList';

const VariableType = {
  independent: 'independent',
  dependent: 'dependent',
};
const variable1 = {
  name: 'Number of times a god barked',
  type: VariableType.dependent,
  description:
    'This variable measures the number of times a dog barked in ten minutes',
};
const variable2 = {
  name: 'Number of times a cat barked',
  type: VariableType.independent,
  description:
    'This variable measures the number of times a cat barked in ten minutes',
};
const variables = [variable1, variable2];

const VariableTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Variable type</TableCell>
            <TableCell>Variable name</TableCell>
            <TableCell>Description</TableCell>
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
