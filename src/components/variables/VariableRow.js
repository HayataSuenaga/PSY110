import { Chip, TableRow, TableCell, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const VariableRow = ({ variable, onSelect, onDelete }) => {
  return (
    <TableRow>
      <TableCell><Chip label={variable.type} /></TableCell>
      <TableCell>{variable.name}</TableCell>
      <TableCell>{variable.description}</TableCell>
      <TableCell>
        <Button onClick={() => onSelect(variable)}><EditIcon /></Button>
        <Button onClick={() => onDelete(variable.id)}><DeleteIcon /></Button>
      </TableCell>
    </TableRow>
  );
};

export default VariableRow;