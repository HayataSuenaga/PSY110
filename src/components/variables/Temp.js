import { MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";

const EditVariable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Variable Type</TableCell>
            <TableCell>Variable Name</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Select value='independent' fullWidth>
                <MenuItem value='independent'>independent</MenuItem>
                <MenuItem value='dependent'>dependent</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <TextField label='Variable name' fullWidth></TextField>
            </TableCell>
            <TableCell>
              <TextField label='Description' fullWidth></TextField>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EditVariable