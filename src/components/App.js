import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import store from '../store/store';
import ExperimentStepper from './ExperimentStepper';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <ExperimentStepper />
      </Container>
    </Provider>
  );
}

export default App;
