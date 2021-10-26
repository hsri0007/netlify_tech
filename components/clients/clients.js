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
    padding: "60px 15px",
    backgroundColor: "#1358db",
    color: "#fff",
  },
  title: {
    fontSize: "32px",
    textAlign: "center",
  },
  Category_title: {
    fontSize: "28px",
    fontWeight: "600",
    margin: "auto",
  },
  line: {
    border: "none",
    border: "3px solid #ffcf00",
    width: "10%",
    margin: "0px auto 30px auto",
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

function Clients({ trending }) {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className={classes.firstPage}>
      <Container maxWidth="lg">
        <div>
          <h2 className={classes.title}>
            Connect With 5,000+ Hiring Companies
          </h2>
          <div className={classes.line} />
          <Grid container spacing={3}>
            <Grid item lg={2} md={3} sm={6} xs={6}>
              <img src="" className={classes.clients} />
            </Grid>
          </Grid>
        </div>
        <div></div>
      </Container>
    </section>
  );
}

export default Clients;
