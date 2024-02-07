// Code to render the App component to the DOM
// The App component is wrapped in a BrowserRouter component to enable routing
// The App component is wrapped in a ThemeProvider component to enable the use of Material-UI theming
// The App component is wrapped in a Provider component to enable the use of Redux store
// The Provider component is passed the store as a prop
// The ThemeProvider component is passed a theme as a prop
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './app/store';

const theme = createTheme({});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
