import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: "flex", alignItems: "center"
    },
    stars_outer: {
        position: "relative",
        display: "inline-block",
        '&::before': {
            content: '"\\2605 \\2605 \\2605 \\2605 \\2605"',
            fontWeight: 900,
            fontSize: '1.4rem',
            color: '#fff'
        }
    },
    stars_inner: {
        position: "absolute",
        top: 0,
        left: 0,
        whiteSpace: "nowrap",
        overflow: "hidden",
        width: 0,
        '&::after': {
            content: '"\\2605 \\2605 \\2605 \\2605 \\2605"',
            fontWeight: 900,
            fontSize: '1.4rem',
            color: '#ff8305'
        }
    },
});

const Rating = ({ value }) => {
    const classes = useStyles();
    const rating = +value;
    const starsTotal = 5;
    const starPercentage = (rating / starsTotal * 100);
    const starPercentageRounded = `${Math.round(starPercentage)}%`;

    return (
        <div className={classes.root}>
            <div className={classes.stars_outer}>
                <div className={classes.stars_inner} style={{ width: `${starPercentageRounded}` }} />
            </div>
            {/* <div className="ml-2 pt-1" >
                {`(${value})`}
            </div> */}
        </div>
    )
}

export default Rating