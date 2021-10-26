import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "32px",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: '2rem'
        }
    },
    line: {
        border:"none",
        borderTop: "4px solid #ffcf00",
        width: "10%",
        margin: "0px auto 30px auto",
    },
}));

const HeadingsComponent = ({ first, last }) => {
    const classes = useStyles();

    return (
        <>
            <div>
                <h2 className={classes.title}>{first} &nbsp;{last}</h2>
                <div className={classes.line} />
            </div>
        </>
    )
}

export default HeadingsComponent
