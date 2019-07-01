import React from 'react';
import useStyles from './styles';
import Icon from '@material-ui/core/Icon';

const ErrorIndicator = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Icon className={classes.icon} color="error" fontSize="large">error</Icon>
    </div>
  )
};

export default ErrorIndicator;