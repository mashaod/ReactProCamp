import { fade } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "red"
    },
        menuButton: {
        marginRight: theme.spacing(2),
    },
    logoBox: {
        flexGrow: 1,
        display: "flex",
        justifyContent: 'center'
    },
        logo: {
        maxHeight: "100px",
        padding: theme.spacing(1, 1, 1, 7),
    },
        inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
        width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;