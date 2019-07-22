import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Fade from '@material-ui/core/Fade';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Icon from '../../icon';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    eventIcon: {
        width: "30px",
        height: "30px",
    }
});

function DialogEventList(props) {
    const { fixture, classes: { eventIcon } } = props;
    return (
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="right">Event</TableCell>
                    <TableCell align="left">Elapsed</TableCell>
                    <TableCell align="right">Team</TableCell>
                    <TableCell align="left">Player</TableCell>
                    <TableCell align="left">Detail</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {fixture.events && fixture.events.map(event => (
                    <Fade in={true} timeout={2000}>
                        <TableRow key={event.elapsed + event.player_id + event.detail}>
                            <TableCell align="right">
                                <Icon name={event.detail} className={eventIcon} />
                            </TableCell>
                            <TableCell align="left">{event.elapsed}</TableCell>
                            <TableCell align="right">{event.teamName}</TableCell>
                            <TableCell align="left">{event.player}</TableCell>
                            <TableCell align="left">{event.detail}</TableCell>
                        </TableRow>
                    </Fade>
                ))}
            </TableBody>
        </Table>
    );
};

DialogEventList.propTypes = {
    fixture: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogEventList);