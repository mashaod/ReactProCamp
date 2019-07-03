import React from 'react';
import { Link } from 'react-router-dom';

import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
import logo from '../../assets/logo.png';

export const MenuItems = () => {
  return (
    <React.Fragment>
      <Button component={Link} to="/" color="inherit">Home</Button>
      <Button component={Link} to="/teams" color="inherit">Teams</Button>
      <Button component={Link} to="/fixtures" color="inherit">Fixtures</Button>
      <Button component={Link} to="/odds" color="inherit">Odds</Button>
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