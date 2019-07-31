import { fade } from '@material-ui/core/styles';

function styles(theme) {
    return {
        title: {
            padding: theme.spacing(2),
        },
        oddsSection: {
            flexDirection: 'column',
            flexGrow: 1
        },
        teams: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            "& > div": {
                display: 'flex',
                alignItems: 'center'
            }
        },
        info: {
            marginBottom: theme.spacing(1),
            display: 'flex',
            justifyContent: 'space-between',
            color: theme.palette.grey["700"]
        },
        button: {
            maxHeight: '35px'
        },
        teamLogo: {
            height: '40px',
            width: '40px'
        },
        leftTeam: {
            textAlign: 'left',
            "& > div": {
                padding: theme.spacing(1),
            }
        },
        rightTeam: {
            textAlign: 'right',
            "& > div": {
                padding: theme.spacing(1),
            }
        },
        odds: {
            justifyContent: 'space-between',
            "& > div": {
                padding: theme.spacing(1),
            }
        }
    }
}

export default styles;