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
    textAlign: "center",
  },
  Category_title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "600",
    margin: "auto",
  },
  line: {
    border: "none",
    borderTop: "4px solid #ffcf00",
    width: "10%",
    margin: "0px auto 30px auto",
  },
  cardActions: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  btn: {
    textTransform: "inherit",
    border: "1px solid #2e3191",
    borderRadius: "3px",
    backgroundColor: "#2e3191",
    padding: "8px 30px",
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center",
    color: "#fff",
    marginTop: "50px",
    "&:hover": {
      borderColor: "#2e3191",
      backgroundColor: "#2e3191",
    },
  },

  btnArrow2: {
    fontSize: "16px",
    marginLeft: "10px",
    color: "white",
  },

  btnArrow: {
    fontSize: "16px",
    color: "#003292",
    margin: "auto",
  },

  titleIcon: {
    marginRight: "15px",
    fontSize: "20px",
  },

  categoryCard: {
    margin: "0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "0 2px 18px 0 rgb(0 0 0 / 8%)",
    border: "1px solid #e7e7e7",
    borderRadius: "3px",
    width: "100%",
    color: "unset !important",
    textDecoration: "none",
    padding: "30px",
    minHeight: "120px",
    "&:hover": {
      background: "#2e3191",
      color: "white !important",
      transition: "0.3s",
    },
  },

  ArrowBox: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
  },

  slickArrow: {
    "&:hover": {
      backgroundColor: "primary",
    },
  },
  slickNext: {
    right: "0",
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

function category({ trending }) {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className={classes.firstPage}>
      <Container maxWidth="lg">
        <div>
          <h2 className={classes.title}>
            Explore categories of your interest
          </h2>
          <div className={classes.line} />
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <a className={classes.categoryCard} href='/all-courses' target="_blank">
                <Grid container spacing={3}>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <p className={classes.Category_title}>
                      <FlareIcon className={classes.titleIcon} />
                      Cloud Computing
                    </p>
                  </Grid>
                  <Grid
                    item
                    className={classes.ArrowBox}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={2}
                  >
                    <ArrowForwardIosIcon className={classes.btnArrow} />
                  </Grid>
                </Grid>
              </a>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <a className={classes.categoryCard} href='/all-courses' target="_blank">
                <Grid container spacing={3}>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <p className={classes.Category_title}>
                      <FlareIcon className={classes.titleIcon} />
                      Business Intelligence & Analytics
                    </p>
                  </Grid>
                  <Grid
                    item
                    className={classes.ArrowBox}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={2}
                  >
                    <ArrowForwardIosIcon className={classes.btnArrow} />
                  </Grid>
                </Grid>
              </a>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <a className={classes.categoryCard} href='/all-courses' target="_blank">
                <Grid container spacing={3}>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <p className={classes.Category_title}>
                      <FlareIcon className={classes.titleIcon} />
                      Programming & Frameworks
                    </p>
                  </Grid>
                  <Grid
                    item
                    className={classes.ArrowBox}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={2}
                  >
                    <ArrowForwardIosIcon className={classes.btnArrow} />
                  </Grid>
                </Grid>
              </a>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <a className={classes.categoryCard} href='/all-courses' target="_blank">
                <Grid container spacing={3}>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <p className={classes.Category_title}>
                      <FlareIcon className={classes.titleIcon} />
                      Project Mangement & Methodologies
                    </p>
                  </Grid>
                  <Grid
                    item
                    className={classes.ArrowBox}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={2}
                  >
                    <ArrowForwardIosIcon className={classes.btnArrow} />
                  </Grid>
                </Grid>
              </a>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <a className={classes.categoryCard} href='/all-courses' target="_blank">
                <Grid container spacing={3}>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <p className={classes.Category_title}>
                      <FlareIcon className={classes.titleIcon} />
                      Databases Mangement and Administration
                    </p>
                  </Grid>
                  <Grid
                    item
                    className={classes.ArrowBox}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={2}
                  >
                    <ArrowForwardIosIcon className={classes.btnArrow} />
                  </Grid>
                </Grid>
              </a>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <a className={classes.categoryCard} href='/all-courses' target="_blank">
                <Grid container spacing={3}>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <p className={classes.Category_title}>
                      <FlareIcon className={classes.titleIcon} />
                      IT Service Management
                    </p>
                  </Grid>
                  <Grid
                    item
                    className={classes.ArrowBox}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={2}
                  >
                    <ArrowForwardIosIcon className={classes.btnArrow} />
                  </Grid>
                </Grid>
              </a>
            </Grid>
          </Grid>
          <div style={{ marginTop: "30px" }} className={classes.cardActions}>
            <Button target="_blank" href="/all-courses" className={classes.btn}>
              View All Categories
              <ArrowForwardIosIcon className={classes.btnArrow2} />
            </Button>
          </div>
        </div>
        <div></div>
      </Container>
    </section>
  );
}

export default category;
