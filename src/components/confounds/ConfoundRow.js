import { TableCell, TableRow, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ConfoundRow = ({ confound }) => {
  return (
    <TableRow>
      <TableCell>{confound.name}</TableCell>
      <TableCell>{confound.measure}</TableCell>
      <TableCell>
        <Button>
          <EditIcon />
        </Button>
      </TableCell>
      <TableCell>
        <Button>
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ConfoundRow;