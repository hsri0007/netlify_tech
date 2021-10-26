import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, Box, Grid } from "@material-ui/core";
// import { ImPlay2 } from "react-icons/im";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FormModalComponent from "../FormModal/FormModal";
import VideoPopup from "../VideoPopUp/VideoPopup";
import HeadingsComponent from "../HeadingsComponent/HeadingsComponent";
import Album from "../../homePage/clienthome";
import RequestCallBack from "../Objectives/RequestCallBack";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "40px 0 0 0",
  },
  content: {
    fontSize: "20px",
    textAlign: "justify",
    lineHeight: "1.5",
    color: "#3a343a",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  highlights: {
    display: "grid",
    marginTop: "2.5rem",
    gridTemplateColumns: "auto auto",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "auto auto",
    },
    // [theme.breakpoints.down("sm")]: {
    //   gridTemplateColumns: 'auto auto',
    //   justifyContent: 'space-around'
    // },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "auto",
      justifyContent: "center",
    },
  },
  detailHighlights: {
    display: "flex",
    // border: '1px solid red',
    // padding: '1rem',
    marginBottom: "24px",
    "& > div:first-child": {
      // color: '#2491ef',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "30px",
      marginRight: "13px",
    },
    "& > div:last-child": {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: 2,
      color: "#000",
    },
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  test1: {
    // border: '1px solid red',
    // minHeight: '50vh',
    paddingBottom: "4rem",

    marginTop: "1rem",
    // [theme.breakpoints.down("xs")]: {
    // },
  },
  previewBox: {
    position: "relative",
    height: "260px",
    padding: "1rem",
    cursor: "pointer",
    borderRadius: "1.5rem",
    // background: '#e0e0e0',
    // background:`url(${Banner})`
    backgroundImage: (props) =>
      `linear-gradient(rgba(12,11,11,.513),rgba(0,0,0,.472)),url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    boxShadow: " 5px 5px 10px #bebebe,-5px -5px 10px #ffffff",
  },
  previewContent: {
    textAlign: "left",
    padding: "0.5rem 0 0 1rem",
  },
  playBox: {
    position: "absolute",
    bottom: 15,
    right: 15,
  },
  // play_icon: {
  //   margin: 'auto',
  //   display: 'block',
  //   boxShadow: ' 0px 6px 9px rgba(0,0,0,0.2)',
  //   borderRadius: '50%'
  // },
  play_video: {
    color: "#2a32c5",
    fontSize: "2rem",
  },
  reqCallback: {
    display: "block",
    marginTop: "46px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Overview({ data }) {
  const classes = useStyles(data.overview);

  const [open, setOpen] = useState(false);
  const [videomodal, setVideoModal] = useState(false);
  var course = data.overview.course.replace(' Training', '');
  const [thankyouPopup, setThankyouPopup] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setVideoModal(true);
    setThankyouPopup(false);
  };


  return (
    <div id="Overview">
      <section className={classes.section}>
        <HeadingsComponent first="Key" last="Highlights" />
        <Container>
          <Grid container className={classes.test1}>
            <Grid item xs={12} md={4}>
              {data.overview?.video.trim() !== "" ? (
                <Card
                  className={classes.previewBox}
                  onClick={() => setOpen(true)}
                >
                  <div className={classes.previewContent}>
                    <h2
                      style={{
                        marginBottom: 0,
                        marginTop: "0.5rem",
                        fontSize: "2rem",
                      }}
                    >
                      Preview
                    </h2>
                    <p style={{ marginTop: 0, fontSize: "1.5rem" }}>
                      {" "}
                      Course Video
                    </p>
                  </div>
                  <div className={classes.playBox}>
                    <div
                      className="blob red"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PlayArrowIcon className={classes.play_video} />
                    </div>
                  </div>
                </Card>
              ) : (
                <div className={classes.reqCallback}>
                  <RequestCallBack setOpen={setOpen} />
                </div>
              )}
            </Grid>
            <Grid item xs={12} md={8} className={classes.paper}>
              <Box className={classes.highlights}>
                <div className={classes.detailHighlights}>
                  <div>
                    <img
                      src="https://tekslateassets.s3.amazonaws.com/images/Icons/Liveclasses_1.svg"
                      alt="Key Highlights tekslate courses"
                      style={{ height: "32px", width: "50px" }}
                    />
                  </div>
                  <div>
                    {data.overview?.duration} Hrs Instructor Led Training
                  </div>
                </div>
                <div className={classes.detailHighlights}>
                  <div>
                    <img
                      src="https://tekslateassets.s3.amazonaws.com/images/Icons/Selfpacedvideos.svg"
                      alt="Key Highlights tekslate courses"
                      style={{ height: "32px", width: "50px" }}
                    />
                  </div>
                  <div> Self-paced Videos</div>
                </div>
                <div className={classes.detailHighlights}>
                  <div>
                    <img
                      src="https://tekslateassets.s3.amazonaws.com/images/Icons/Labsessions.svg"
                      alt="Key Highlights tekslate courses"
                      style={{ height: "32px", width: "50px" }}
                    />
                  </div>
                  <div>
                    {data.overview.lab_sessions} Hrs Project & Exercises
                  </div>
                </div>
                <div className={classes.detailHighlights}>
                  <div>
                    <img
                      src="https://tekslateassets.s3.amazonaws.com/images/Icons/LiveProjects.svg"
                      alt="Key Highlights tekslate courses"
                      style={{ height: "32px", width: "50px" }}
                    />
                  </div>
                  <div>Certification</div>
                </div>
                <div className={classes.detailHighlights}>
                  <div>
                    <img
                      src="https://tekslateassets.s3.amazonaws.com/images/Icons/24x7Support.svg"
                      alt="Key Highlights tekslate courses"
                      style={{ height: "32px", width: "50px" }}
                    />
                  </div>
                  <div>Job Assistance</div>
                </div>
                <div className={classes.detailHighlights}>
                  <div>
                    <img
                      src="https://tekslateassets.s3.amazonaws.com/images/Icons/Customizable_Curriculum.svg"
                      alt="Key Highlights tekslate courses"
                      style={{ height: "32px", width: "50px" }}
                    />
                  </div>
                  <div>Flexible Schedule</div>
                </div>
                <div className={classes.detailHighlights}>
                  <div>
                    <img
                      src="https://tekslateassets.s3.amazonaws.com/images/Icons/Certification_assistance.svg"
                      alt="Key Highlights tekslate courses"
                      style={{ height: "32px", width: "50px" }}
                    />
                  </div>
                  <div>Lifetime Free Upgrade</div>
                </div>
                <div className={classes.detailHighlights}>
                  <div>
                    <img
                      src="https://tekslateassets.s3.amazonaws.com/images/Icons/Jobassistance.svg"
                      alt="Key Highlights tekslate courses"
                      style={{ height: "32px", width: "50px" }}
                    />
                  </div>
                  <div>Mentor Support</div>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Album />

          <FormModalComponent value={open} handleClose={handleClose} course={course} videoSub={true} thankyouPopup={thankyouPopup} setThankyouPopup={setThankyouPopup} />
          <VideoPopup
            data={false}
            coursename={false}
            show={videomodal}
            vimeo={false}
            onClose={() => setVideoModal(false)}
            video={`${data.overview.video}`}
          />
        </Container>
      </section>
    </div>
  );
}
