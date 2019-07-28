import { fade } from '@material-ui/core/styles';

function styles(theme) {
    return {
        title : {
            padding: theme.spacing(2),
        },
        buttonContainer: {
            textAlign: "center"
        },
        button: {
            margin: theme.spacing(1),
        },
        listItem: {
            "&:nth-child(odd)": {
                backgroundColor: fade(theme.palette.primary.main, 0.1),
            },
        },
        teamLogo: {
            height: '40px',
            width: '40px'
        }
    }
}

export default styles;