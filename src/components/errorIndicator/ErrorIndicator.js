import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Error } from '@material-ui/icons';

function styles(theme) {
    return {
        root: {
            position: "absolute",
            top: "50%",
            left: "50%",
            margin: "-50px 0px 0px -50px"
        }
    }
};

const ErrorIndicator = ({ message=null, classes }) => {
    const drowErrorIcon = () => (<Error className={classes.icon} color="error" fontSize="large" />)
    const drowErrorMessage = () => (<h3>{message}</h3>);

    return (
        <div className={classes.root} >
            { message ? drowErrorMessage() : drowErrorIcon() }
        </div>
    )
};

export default withStyles(styles)(ErrorIndicator);