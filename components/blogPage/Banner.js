import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
const { format } = require('date-fns');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  maintext: {
    color: "#3e3d3d",
    fontSize: "34px",
    fontWeight: "500",
    margin: "auto",
    padding: "15px 0px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },

  type: {
    textAlign: "center",
    fontSize: "14px",
    color: "#1358db",
  },

  date: {
    textAlign: "center",
    fontSize: "14px",
  },

  bannerbg: {
    backgroundImage: `url("https://tekslateassets.s3.amazonaws.com/images//design_bg.svg")`,
    background: "#101d42",
    display: "flex",
    alignItems: "center",
  },

  banner_main: {
    margin: "auto",
    background: "white",
    marginBottom: "-52px",
    marginTop: "52px",
    // border: "1px solid grey",
    boxShadow: "0 0 0 1px #e7e7e7, 0 2px 4px 0 rgb(0 0 0 / 10%)",
  },
  input: {
    background: "white",
    color: "black",
    width: "100%",
    borderRadius: "3px",
    div: {
      background: "white !important",
      padding: "15px !important",
      borderRadius: "5px !important",
      color: "black !important",
    },
  },

  textarea: {
    background: "white",
    color: "black",
    width: "100%",
    borderRadius: "3px",
    // height: '80px',
    overflow: "hidden",
    padding: "10px",
    fontSize: "16px",
    fontFamily: "inherit",
  },
}));

const Banner = ({ blog }) => {
  const classes = useStyles();
  const dateString = blog?.updated_at?.substring(0, 10);
  const date = new Date(dateString);
  return (
    <div>
      <section className={classes.bannerbg}>
        <Container className={classes.banner_main} maxWidth="md">
          <p className={classes.type}>Blog</p>
          <h2 className={classes.maintext}>{blog.title}</h2>
          <p className={classes.date}>{format(date, 'dd MMMM, yyyy')}</p>
        </Container>
      </section>
    </div>
  );
};

export default Banner;
