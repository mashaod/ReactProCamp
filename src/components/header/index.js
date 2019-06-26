import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MenuItems, Logo, SearchBar} from './components';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuItems />
          <Logo />
          <SearchBar />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;