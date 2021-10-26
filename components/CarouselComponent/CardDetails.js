import React from "react";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Button, Card, Link } from "@material-ui/core";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// import bg from '../../../asset/resource/banner.jpg'

export const theme = createTheme({
  overrides: {
    // For label
    MuiCard: {
      root: {
        "& .hidden-button": {
          display: "none",
          transition: ".9s ease",
        },
        "&:hover .hidden-button": {
          display: "block",
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  relatedComp: {
    maxWidth: '250px',
    margin: "0 0.6rem",
    padding: "1rem",
    border: "1px solid #ddd",
    transitionTimingFunction: "ease-in",
    transition: "0.2s",
    "& li": {
      color: "#3f3f3f",
      lineHeight: "24px",
      marginBottom: "10px",
    },
    "&:hover": {
      border: "2px solid blue",
      borderTop: "5px solid blue",
      // cursor: 'pointer'
    },
  },

  
  btn: {
    textTransform: "inherit",
    border: "1px solid #2e3191",
    borderRadius: "3px",
    backgroundColor: "#2e3191",
    padding: "8px 16px",
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center",
    color: "#fff",
    "&:hover": {
      borderColor: "#003fc2",
      backgroundColor: "#003fc2",
    },
  },

  btnArrow: {
    fontSize: "16px",
    marginLeft: "10px",
  },
}));

export default function MediaControlCard({ review, idx }) {
  const classes = useStyles();
  // console.log('************this is review**********: ', review);

  return (
    <>
      <Card elevation={0} className={classes.relatedComp}>
        <div>
          <img src={review.imgUri} alt="related courses" height="150px" width="100%" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #000",
            padding: "0.5rem",
            fontSize: "0.8rem",
          }}
        >
          <p>{review.name}</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <StarOutlineRoundedIcon
              style={{ fontSize: "1rem", marginBottom: "0.1rem" }}
            />
            <span>{review.rating}</span>
          </div>
        </div>
        <div className="hidden-button">
          <a className={classes.btn} target="_blank" variant="contained" color="primary" style={{ width: "100%" }} href={review.slug} >
            START LEARNING <ArrowForwardIosIcon className={classes.btnArrow} />
          </a>
        </div>
      </Card>
    </>
  );
}
