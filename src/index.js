import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: 'white',
    black: 'black',
    red: 'red',
    blue: 'blue',
    purple: 'purple',
    green: 'green',
    grey: 'grey',
    azure: 'azure',
    accent: 'tomato',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
