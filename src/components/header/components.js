import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
import logo from '../../assets/logo.png';

export const MenuItems = () => {
  return (
    <React.Fragment>
      <Button color="inherit">Home</Button>
      <Button color="inherit">Teams</Button>
      <Button color="inherit">Fixtures</Button>
      <Button color="inherit">Odds</Button>
    </React.Fragment>
  )
}

export const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoBox}>
      <img className={classes.logo} src={logo} alt="Logo"/>
    </div>
  )
}

export const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'Search' }}
      />
    </div>
  )
}