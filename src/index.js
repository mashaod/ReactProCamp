import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { AppServiceProvider } from './contexts';
import AppService from './services/appService';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

const appService = new AppService();

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <AppServiceProvider value={appService}>
        <App />
      </AppServiceProvider>
    </MuiThemeProvider>, 
    document.getElementById('root')
  );
