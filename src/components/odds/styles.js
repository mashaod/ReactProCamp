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
                alignItems: 'center',
                width: '33.3%'
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
            justifyContent: 'flex-start',
            "& > div": {
                padding: theme.spacing(1),
            }
        },
        rightTeam: {
            justifyContent: 'flex-end',
            "& > div": {
                padding: theme.spacing(1),
            }
        },
        odds: {
            justifyContent: 'center',
            "& > div": {
                padding: theme.spacing(1),
            }
        }
    }
}

export default styles;