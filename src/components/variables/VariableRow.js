import { Chip, TableRow, TableCell, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Variable = (props) => {
  const { variable } = props;
  return (
    <TableRow>
      <TableCell><Chip label={variable.type} /></TableCell>
      <TableCell>{variable.name}</TableCell>
      <TableCell>{variable.description}</TableCell>
      <TableCell>
        <Button><EditIcon /></Button>
        <Button><DeleteIcon /></Button>
      </TableCell>
    </TableRow>
  );
};

export default Variable;