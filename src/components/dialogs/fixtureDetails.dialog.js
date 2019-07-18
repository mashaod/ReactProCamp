import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Icon from '../icon';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const FixtureDetailsDialog = ({ open, handleClose, fixture, loading, error }) => {
    if (!open) return null;

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            fullWidth={true}
            maxWidth={'md'}
        >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Fixture details
            </DialogTitle>

            <DialogContent dividers>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid container item xs={3} direction="column" justify="center" alignItems="center">
                        <img src={fixture.homeTeam.logo} alt="homeTeam logo"/>
                        <h2>{fixture.homeTeam.team_name}</h2>
                    </Grid>
                    <Grid container item xs={3} justify="center" alignItems="center">
                        <Typography align="center" variant="h1">{fixture.goalsHomeTeam} : {fixture.goalsAwayTeam}</Typography>
                    </Grid>
                    <Grid container item xs={3} direction="column" justify="center" alignItems="center">
                        <img src={fixture.awayTeam.logo} alt="awayTeam logo"/>
                        <h2>{fixture.awayTeam.team_name}</h2>
                    </Grid>
                </Grid>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="left">Event</TableCell>
                            <TableCell align="right">Elapsed</TableCell>
                            <TableCell align="right">Team</TableCell>
                            <TableCell align="right">Player</TableCell>
                            <TableCell align="right">Detail</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fixture.events && fixture.events.map(event => (
                        <TableRow key={event.elapsed + event.player_id + event.detail}>
                            <TableCell align="right">
                                <Icon name={event.detail} width={30} height={30}/>
                            </TableCell>
                            <TableCell align="left">{event.type}</TableCell>
                            <TableCell align="right">{event.elapsed}</TableCell>
                            <TableCell align="right">{event.teamName}</TableCell>
                            <TableCell align="right">{event.player}</TableCell>
                            <TableCell align="right">{event.detail}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </DialogContent>
        </Dialog>
    );
}

export default FixtureDetailsDialog;