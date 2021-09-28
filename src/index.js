import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store/store';
import * as Action from './store/experiment';

// import { ThemeProvider } from '@mui/system';
// import theme from './Theme';

store.subscribe(() => console.log(store.getState()));
store.dispatch(Action.addVariable('independent', 'new variable', 'this is my variable'));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
