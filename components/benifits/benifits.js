import React, { useState } from "react";

import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Grid from "@material-ui/core/Grid";
import FlareIcon from "@material-ui/icons/Flare";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    marginLeft: 10,
    marginRight: 10,
    boxShadow: "none",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 1700px)": {
      maxWidth: 405,
      minHeight: 200,
    },
    "@media (max-width: 600px)": {
      maxWidth: 350,
      minHeight: 200,
    },
  },
  media: {
    height: 150,
    width: 288,
    marginBottom: "28px",
    width: "100%",
    borderRadius: "12px",
    margin: "auto",
  },
  firstPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // marginBottom: "20px",
    padding: "60px 15px",
  },
  title: {
    fontSize: "32px",
  },
  Category_title: {
    fontSize: "28px",
    fontWeight: "600",
    margin: "auto",
  },
  line: {
    border: "none",
    borderTop: "4px solid #ffcf00",
    width: "10%",
    margin: "0px 0px 30px 0px",
  },
  cardActions: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bannerbg: {
    backgroundImage: `url("https://tekslateassets.s3.amazonaws.com/images/benifitBg.svg")`,
    display: "flex",
    alignItems: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    flexDirection: "column",
    justifyContent: "center",
  },

  point: {
    margin: "0px",
    fontSize: "16px",
    fontWeight: "500",
  },

  pointIcon: {
    color: "#1358db",
    fontSize: "20px",
    float: "right",
  },

  headline: {
    fontSize: "56px",
    margin: "10px",
  },

  caption: {
    margin: "5px",
    fontSize: "24px",
    fontWeight: "600",
  },

  desc: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#4d4e4e",
    marginBottom: "30px",
  },

  container: {
    maxWidth: "1700px",
    "@media (max-width: 1700px)": {
      maxWidth: "1200px",
    },
    "@media (max-width: 600px)": {
      maxWidth: "320px",
    },
  },
});

function Benifits({ trending }) {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className={classes.firstPage}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <h2 className={classes.title}>Ready to Accelerate Your Career?</h2>
            <div className={classes.line} />
            <p className={classes.desc}>
              Join a network of over 100,000 professionals who have dtransformed
              their career through BrainStation.
            </p>

            <Grid container spacing={3}>
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <CheckIcon className={classes.pointIcon} />
              </Grid>
              <Grid item lg={11} md={11} sm={11} xs={11}>
                <p className={classes.point}>
                  Learn more about BrainStation certificate courses and
                  bootcamps
                </p>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <CheckIcon className={classes.pointIcon} />
              </Grid>
              <Grid item lg={11} md={11} sm={11} xs={11}>
                <p className={classes.point}>
                  Discuss tuition, payment plans, and scholarships
                </p>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <CheckIcon className={classes.pointIcon} />
              </Grid>
              <Grid item lg={11} md={11} sm={11} xs={11}>
                <p className={classes.point}>
                  Figure out which course is right for you
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.bannerbg} item lg={6} md={6} sm={12} xs={12}>
            <h4 className={classes.headline}>10,000 +</h4>
            <p className={classes.caption}>professionals trained</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Benifits;
