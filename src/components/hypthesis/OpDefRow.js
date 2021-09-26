import { Button, TableRow, TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const OpDefRow = ({ opDef }) => {
  return (
    <TableRow>
      <TableCell>{opDef.term}</TableCell>
      <TableCell>{opDef.def}</TableCell>
      <TableCell>
        <Button>
          <EditIcon />
        </Button>
        <Button>
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default OpDefRow;
