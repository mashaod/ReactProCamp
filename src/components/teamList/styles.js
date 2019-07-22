function styles(theme) {
    return {
        paper: {
            '&:hover': {
                transform: "scale(1.01)",
                transition: "0.3s",
                boxShadow: "0px 1px 12px 0px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.25), 0px 8px 5px -1px rgba(0,0,0,0.12)"
            }
        },
        control: {
            maxWidth: "250px"
        },
        teamLink: {
            textDecoration: 'none',
            color: 'inherit'
        }
    }
};

export default styles;