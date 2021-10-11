import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const ExpTable = ({ items }) => {

  const fields = items.length !== 0 ? Object.keys(items[0]) : [];

  return (
    <Table component={Paper}>
      <TableHead>
        <TableRow>
          {fields.map(field => (
            <TableCell>{field}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(item => (
          <TableRow>
            {Object.values(item).map(value => (
              <TableCell>{value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExpTable;