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
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

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
    marginBottom: "10px",
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
  starbox: {
    display: "flex",
    justifyContent: "flex-start",
    color: "#ffd400",
    alignItems: "flex-end",
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
      borderColor: "#003fc2",
      backgroundColor: "#003fc2",
    },
  },

  courseTitle: {
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "500",
    margin: "0px 0px 15px 0px",
  },

  btnArrow: {
    fontSize: "16px",
    marginLeft: "10px",
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

function firstPage({ trending }) {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(0);

  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: (i) => {
      return (
        <div>
          <h2>{i}</h2>
        </div>
      );
    },
    nextArrow: (
      <ArrowForwardIosIcon
        color="primary"
        fontSize="medium"
        className="slickArrow"
        focusable={true}
      />
    ),
    prevArrow: (
      <ArrowBackIosIcon
        color="primary"
        fontSize="medium"
        className="slickArrow"
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className={classes.firstPage}>
      <Container className={classes.container}>
        <div>
          <h2 className={classes.title}>
            Defining the Future of Digital Learning
          </h2>
          <div className={classes.line} />
        </div>
        <div>
          <Slider {...settings}>
            {trending.map((a) => (
              <div className={classes.card}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={a.image}
                      title={a.course}
                    />
                    <CardContent>
                      <p className={classes.courseTitle}>{a.course}</p>
                      <span className={classes.starbox}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarHalfIcon />
                        &nbsp;<span style={{ color: "grey" }}>4.5(1300)</span>
                      </span>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </Slider>
          <div style={{ marginTop: "30px" }} className={classes.cardActions}>
            <Button className={classes.btn}>
              Browse Courses{" "}
              <ArrowForwardIosIcon className={classes.btnArrow} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default firstPage;
