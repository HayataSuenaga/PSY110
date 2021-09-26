import { Chip, TableRow, TableCell } from '@mui/material';

const Variable = (props) => {
  const { variable } = props;
  return (
    <TableRow>
      <TableCell><Chip label={variable.type} /></TableCell>
      <TableCell>{variable.name}</TableCell>
      <TableCell>{variable.description}</TableCell>
    </TableRow>
  );
};

export default Variable;