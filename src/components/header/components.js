import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import styles from './styles';
import logo from '../../assets/logo.png';

function MenuItemsTemplate() {
    return (
        <React.Fragment>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/teams" color="inherit">Teams</Button>
            <Button component={Link} to="/fixtures" color="inherit">Fixtures</Button>
            <Button component={Link} to="/odds" color="inherit">Odds</Button>
        </React.Fragment>
    )
}

function LogoTemplate({ classes }) {
    return (
        <div className={classes.logoBox}>
            <img className={classes.logo} src={logo} alt="Logo"/>
        </div>
    )
}

function SearchBarTemplate({ classes }) {
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'Search' }}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
            />
        </div>
    )
}

export const MenuItems = MenuItemsTemplate;
export const Logo = withStyles(styles)(LogoTemplate);
export const SearchBar = withStyles(styles)(SearchBarTemplate);