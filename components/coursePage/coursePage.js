/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
// import Bg from '../../../asset/resource/hero_banner1.svg';
import RatingComponent from "../RatingComponent/rating";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import FormModalComponent from "./FormModal/FormModal";
import CourseButtonComponent from "./CourseButtonComponent/CourseButtonComponent";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  root: {
    background: "#9ed5f6",
    "& > div": {
      width: "90%",
      margin: "0 auto",
    },
  },
  banner: {
    display: "grid !important",
    gridTemplateColumns: "50% 45%",
    justifyContent: "space-between",
    minHeight: "75vh",
    overflow: "hidden",
    "& > div:first-child": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    "& p": {
      // fontSize: '1rem',
      margin: 0,
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "100%",
      minHeight: "55vh !important",
      // padding: '3rem 0'
    },
    [theme.breakpoints.down("sm")]: {
      padding: '3rem 0'
    },
  },
  courseHeading: {
    margin: "0.4rem 0rem",
    fontSize: "3rem",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: '2rem'
    }
  },
  description: {
    margin: "0.5rem 0 1.8rem 0 !important",
    lineHeight: "1.4 !important",
  },
  bannerImg: {
    display: "flex",
    justifyContent: "end",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  bannersubText: {
    display: "flex",
    alignItems: "center",
    margin: "25px 0 0 0",
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column',
      alignItems: "start",
    },
    // border: '1px solid red'
  },
  totalRating: {
    display: "flex",
    justifyContent: "center",
    padding: "0 1rem 0.2rem 0",
    // border: '1px solid blue',
    "& > div:last-child": {
      paddingTop: "8px",
      paddingLeft: "4px",
      // border: '1px solid black',
    },
  },
  totalEnrolled: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "6px",
    // border: '1px solid black',
    // "& > div:first-child": {
    //   // paddingTop: '0.3rem',
    //   // border: '1px solid blue'
    // },
    "& > div:last-child": {
      paddingTop: "3px",
      paddingLeft: " 0.4rem",
      fontWeight: "bold",
      // border: '1px solid green'
    },
  },
}));

const CoursePage = ({ data }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [thankyouPopup, setThankyouPopup] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setThankyouPopup(false);
  };

  var course = data.overview.course.replace(' Training', '');

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid style={{ margin: "auto" }} item lg={6} md={6} sm={12} xs={12}>
            <div>
              <p style={{ margin: "5px 0px" }}>
                Online | Self-Paced | Corporate
              </p>
              <p className={classes.courseHeading}>{data.overview.course}</p>
              <span
                className={classes.description}
                dangerouslySetInnerHTML={{ __html: data?.overview?.description }}
              />


              <div>
                <CourseButtonComponent subject='Get Started' setOpen={setOpen} />
              </div>
              <div className={classes.bannersubText}>
                <div className={classes.totalRating}>
                  <div>
                    <RatingComponent value={data.overview.rating} />
                  </div>
                  <div>({data.overview.rating})</div>
                </div>
                <div className={classes.totalEnrolled}>
                  <div>
                    <GroupAddIcon />
                  </div>
                  <div>{data.overview.enrolled} Learners</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className={classes.bannerImg}>
              <img
                src={
                  "https://tekslateassets.s3.amazonaws.com/images/hero_banner1.svg"
                } style={{ width: "500px", height: "500px" }}
                alt="banner"
              />
            </div>
          </Grid>
        </Grid>
        <FormModalComponent
          value={open}
          handleClose={handleClose}
          subject={"Get Pricing"}
          thankyouPopup={thankyouPopup}
          setThankyouPopup={setThankyouPopup}
          course={course}
        />
      </Container>
    </div>
  );
};

export default CoursePage;
