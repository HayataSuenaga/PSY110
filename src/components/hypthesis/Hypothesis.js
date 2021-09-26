import {
  Box,
  List,
  ListItem,
  Card,
  TextField,
  useTheme,
  Paper,
  Grid,
  Button
} from '@mui/material';
import { grid } from '@mui/system';
import EditOpDefinition from './EditOpDefinition';
import OpDefinition from './OpDefinition';
import { hypothesis } from '../../Text';

const createOpDef = (term, def) => ({term, def});
const opDefs = [
  createOpDef('Term1', 'This is the definition for Term1'),
  createOpDef('Term2', 'This is the definition for Term2'),
  createOpDef('Term3', 'This is the definition for Term3')
];

const Hypothesis = () => {
  const theme = useTheme();

  return (
    <Box>
      <Card sx={{padding: theme.spacing(2)}}>{hypothesis}</Card>
      <TextField
        id="outlined-multiline-flexible"
        label="Your hypothesis"
        multiline
        variant="outlined"
        sx={{width: '100%'}}
      />
      <Card sx={{padding: theme.spacing(2)}}>{hypothesis}</Card>
      <List>
        {opDefs.map((opDef, index) => (
          <ListItem key={index}>
            <EditOpDefinition />
          </ListItem>
        ))}
        {opDefs.map((opDef, index) => (
          <ListItem key={index}>
            <OpDefinition opDef={opDef}/>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Hypothesis;