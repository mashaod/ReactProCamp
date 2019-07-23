import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MenuItems, Logo, SearchBar} from './components';

const Header = ({ classes }) => (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <MenuItems />
                <Logo />
                <SearchBar />
            </Toolbar>
        </AppBar>
    </div>
)

export default withStyles(styles)(Header);