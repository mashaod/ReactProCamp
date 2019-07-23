import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';

import DialogTitle from './DialogTitle';
import DialogHeader from './DialogHeader';
import DialogEventList from './DialogEventList';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

function FixtureDetailsDialog({ open, handleClose, fixture }) {
    if (!open) return null;

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="fixture-dialog-title"
            open={open}
            fullWidth={true}
            maxWidth={'md'}
            scroll="paper"
            transitionDuration={2000}
        >
            <DialogTitle id="fixture-dialog-title" onClose={handleClose}>
                Fixture details
            </DialogTitle>

            <MuiDialogContent dividers>
                <DialogHeader fixture={fixture} />
                <DialogEventList fixture={fixture} />
            </MuiDialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

FixtureDetailsDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    fixture: PropTypes.object.isRequired
};

export default FixtureDetailsDialog;