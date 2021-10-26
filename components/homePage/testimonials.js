import React, { useState } from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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

  linkedin: {
    fontSize: "40px",
    position: "absolute",
    top: "0",
    color: "#115293",
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

    // border: '1px solid red',
    // marginBottom: "20px",
    padding: "60px 15px",
  },
  title: {
    fontSize: "32px",
    textAlign: "center",
  },
  line: {
    border:"none",
    borderTop: "4px solid #ffcf00",
    width: "10%",
    margin: "0px auto 30px auto",
  },

  line2: {
    borderTop: "4px solid #ffcf00",
    width: "10%",
    margin: "0px auto 20px auto",
  },

  name: {
    textAlign: "center",
    fontSize: "18px",
    margin: "0px 0px 10px 0px",
    fontWeight: "600",
    color: "#404040",
  },
  line: {
    border:"none",
    borderTop: "4px solid #ffcf00",
    width: "10%",
    margin: "0px auto 30px auto",
  },

  card: {
    margin: "20px 30px",
    padding: "20px",
    boxShadow: "0px 0px 1.42rem 0px rgb(0 0 0 / 19%)",
  },

  designation: {
    textAlign: "center",
    margin: "0px 0px 10px 0px",
    fontSize: "16px",
    color: "#4a4a4a",
  },

  testimonial: {
    fontSize: "16px",
    display: "flex",
    flexDirection: "column",
    fontWeight: "400",
    color: "#5a5a5a",
    textAlign: "center",
  },

  quoteIcon: {
    position: "absolute",
    fontSize: "100px",
    marginTop: "-30px",
    marginLeft: "-30px",
    color: "#f3f4f6",
    zIndex: "1",
  },

  text: {
    minHeight: "120px",
    marginTop: "20px",
  },
  cardActions: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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

  btnArrow: {
    fontSize: "16px",
    marginLeft: "10px",
  },

  profileImg: {
    display: "block",
    margin: "auto",
  },

  slickArrow: {
    "&:hover": {
      backgroundColor: "primary",
    },
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

function testimonials({ trending }) {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(0);

  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          What our learners say about TekSlate:
          </h2>
          <div className={classes.line} />
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <div className={classes.card}>
                {/* <a href="">
                  <LinkedInIcon className={classes.linkedin} />
                </a> */}
                <div className={classes.testimonial}>
                  <img
                    className={classes.profileImg}
                    style={{ width: "120px", height: "120px" }}
                      src="https://tekslateassets.s3.amazonaws.com/images/profile.svg" alt="user reviews"
                  />
                  <div>
                    {/* <FormatQuoteIcon className={classes.quoteIcon} /> */}
                    <p className={classes.text}>
                    These guys are really helpful and assisted me throughout the training. I have gone through ServiceNow training and I am satisfied with the complete course program.
                    </p>
                  </div>
                </div>
                <div className={classes.line2} />
                <p className={classes.name}>Navdeep Sharma</p>
                {/* <p className={classes.designation}>Digital marketing</p> */}
              </div>
            </div>

            <div>
              <div className={classes.card}>
                {/* <a href="">
                  <LinkedInIcon className={classes.linkedin} />
                </a> */}
                <div className={classes.testimonial}>
                  <img
                    className={classes.profileImg}
                    style={{ width: "120px", height: "120px" }}
                      src="https://tekslateassets.s3.amazonaws.com/images/profile.svg" alt="user reviews"
                  />
                  <div>
                    {/* <FormatQuoteIcon className={classes.quoteIcon} /> */}
                    <p className={classes.text}>
                    Thank you TekSlate for the AWS training. I am happy with the course and the flexibility to upgrade anytime anywhere. Special mentions to the trainer Aruna. You are the best.
                    </p>
                  </div>
                </div>
                <div className={classes.line2} />
                <p className={classes.name}>Sheethal N</p>
                {/* <p className={classes.designation}>Digital marketing</p> */}
              </div>
            </div>

            <div>
              <div className={classes.card}>
                {/* <a href="">
                  <LinkedInIcon className={classes.linkedin} />
                </a> */}
                <div className={classes.testimonial}>
                  <img
                    className={classes.profileImg}
                    style={{ width: "120px", height: "120px" }}
                      src="https://tekslateassets.s3.amazonaws.com/images/profile.svg" alt="user reviews"
                  />
                  <div>
                    {/* <FormatQuoteIcon className={classes.quoteIcon} /> */}
                    <p className={classes.text}>
                    I was disappointed with the training from XYZ and then again after a bit research and referral, I enrolled for Cybersecurity training from TekSlate.  This team is different, and they understand what the market expect from you and deliver everything you need. I'd recommend TekSlate anyday.
                    </p>
                  </div>
                </div>
                <div className={classes.line2} />
                <p className={classes.name}>Vineeth Agarwal</p>
                {/* <p className={classes.designation}>Digital marketing</p> */}
              </div>
            </div>

            {/* {trending.map((a) => (
              <div className={classes.card}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={a.image}
                      title={a.course}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {a.course}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                  <Button className={classes.btn}>Browse courses <ArrowForwardIosIcon className={classes.btnArrow} /></Button>
                  </CardActions>
                </Card>
              </div>
            ))} */}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default testimonials;
