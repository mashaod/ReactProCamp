import React from 'react';
import Header from './components/header';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
    </MuiThemeProvider>
  )
}

export default App;
