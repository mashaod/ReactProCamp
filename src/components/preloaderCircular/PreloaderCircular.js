import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

function styles(theme) {
    return {
        root: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        }
    }
};

function PreloaderCircular({ classes }) {
    return (
        <div className={classes.root} >
            <CircularProgress
                variant="indeterminate"
                size={48}
            />
        </div>
    )
};

export default withStyles(styles)(PreloaderCircular);