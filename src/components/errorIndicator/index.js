import React from 'react';
import useStyles from './styles';
import { Error } from '@material-ui/icons';

const ErrorIndicator = ({ message=null }) => {
    const classes = useStyles();

    const drowErrorIcon = () => (<Error className={classes.icon} color="error" fontSize="large" />)
    const drowErrorMessage = () => (<h3>{message}</h3>);

    return (
        <div className={classes.root} >
            { message ? drowErrorMessage() : drowErrorIcon() }
        </div>
    )
};

export default ErrorIndicator;