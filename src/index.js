import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { AppServiceProvider } from './contexts';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from './components/app';
import AppService from './services/appService';

import theme from "./theme";
import store from './store';

const appService = new AppService();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <AppServiceProvider value={appService}>
                <App />
            </AppServiceProvider>
        </MuiThemeProvider>
    </Provider>, 
    document.getElementById('root')
);
