import { Button, TableRow, TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const OpDefRow = ({ opDef, onSelect, onDelete }) => {
  return (
    <TableRow>
      <TableCell>{opDef.term}</TableCell>
      <TableCell>{opDef.def}</TableCell>
      <TableCell>
        <Button onClick={() => onSelect(opDef)}>
          <EditIcon />
        </Button>
        <Button onClick={() => onDelete(opDef.id)}>
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default OpDefRow;
