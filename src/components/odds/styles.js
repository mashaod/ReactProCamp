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
        teamLogo: {
            height: '40px',
            width: '40px'
        },
        header: {
            color: 'grey'
        },
        list: {

        },
        listItem: {
            "&:nth-child(even)": {
                backgroundColor: fade(theme.palette.primary.main, 0.1),
            },
            "& > div": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            "& > div:nth-child(1)": {
                width: "20%"
            },
            "& > div:nth-child(2)": {
                justifyContent: "left",
                width: "60%"
            },
            "& > div:nth-child(3)": {
                width: "20%"
            }
        }
    }
}

export default styles;