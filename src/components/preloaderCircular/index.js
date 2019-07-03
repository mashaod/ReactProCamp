import React from 'react';
import useStyles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const PreloaderCircular = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <CircularProgress
                variant="indeterminate"
                size={48}
            />
        </div>
    )
};

export default PreloaderCircular;