import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Container, Accordion, AccordionDetails, AccordionSummary, Typography, Button, TextField, Modal, Backdrop, Fade } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
// import Learning from "../../../asset/resource/learning.svg";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { postEnquiry, getIPDetails } from '../../../apiCalls';
import CourseButtonComponent from '../CourseButtonComponent/CourseButtonComponent';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: (props) => {
    return {
      // color: theme.palette.primary.main,
      background: "#fff",
    };
  },

  section: {
    padding: "40px 0",
  },

  mainhead: {
    fontSize: "1rem",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "27px",
    },
  },
  curriculumHeading: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: '2rem'
    }
  },
  curriculumBox: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    minHeight: "50vh",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "100%",
    },
  },
  mailBox: {
    display: "grid",
    gridTemplateColumns: "60% 30%",
    background: "rgb(42 50 197)",
    width: "80%",
    margin: "0 auto",
    padding: "1rem 0",
    borderRadius: "4px",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "100%",
      width: "100%",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    background: "#fff",
    display: "grid",
    gridTemplateColumns: "40% 60%",
    borderRadius: "4px",
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "auto",
    },
    "& > div:first-child": {
      padding: "1rem",
      background: "#f7faf7",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      "& p": {
        display: "flex",
        alignItems: "center",
      },
    },
    "& > div:last-child": {
      position: "relative",
      margin: "1rem",
    },
  },
  modalForm: {
    marginTop: "2.5rem",
  },
  closebttn: {
    position: "absolute",
    right: 0,
    "&:hover": {
      cursor: "pointer",
    },
  },
  inputDiv: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  thanksbox: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },


  checkicon: {
    fontSize: "100px",
    color: "white",
  },


  thanksText: {
    fontWeight: "600",
    color: "white",
    fontSize: "18px",
  }
}));

export default function Curriculum({ data, subject }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("panel0");
  const [alignment, setAlignment] = useState("OnDemand");
  const [open, setOpen] = useState(false);
  const [thankyouPopup, setThankyouPopup] = React.useState(false);
  var course = data.overview.course.replace(' Training', '');

  const handleClose = () => {
    setOpen(false);
    setThankyouPopup(false);
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    if (!emailRegex.test(e.target.email.value)) {
      alert('Email Invalid');
      return;
    }
    if (!phoneRegex.test(e.target.phone.value)) {
      alert('Phone number Invalid');
      return;
    }
    const ipData = await getIPDetails();
    // console.log('**********this is data.overview*************', data.overview);
    const formValue = {};
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    formValue.email = e.target.email.value;
    formValue.phone = '+' + ipData.location.calling_code + e.target.phone.value;
    formValue.message = e.target.message.value;
    formValue.page_url = window.location.href;
    formValue.subject = alignment + " Course Enquiry";
    formValue.fullname = fname + ' ' + lname;
    if (course) formValue.course = course;
    if (ipData?.country_name) formValue.country = ipData.country_name;
    else formValue.country = "India";
    if (ipData?.ip) formValue.ip = ipData.ip;
    else formValue.ip = '127.0.0.1';
    await postEnquiry({ ...formValue });
    setThankyouPopup(true);
    setTimeout(handleClose, 2000);
    window.open(data.overview?.curriculum_pdf, "_blank");
  }

  return (
    <div id="Curriculum" style={{ background: "#f2eddf" }}>
      <section className={classes.section}>
        <Container>
          <div className={classes.curriculumBox}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p className={classes.mainhead}>Curriculum</p>
              <p className={classes.curriculumHeading}>
                A complete index of
                <br /> job-ready skills curated <br /> to meet the industrial
                need.
                <br /> Explore.
              </p>
            </div>
            <div style={{ padding: "1rem 0", minHeight: "400px" }}>
              {data.curriculum.map((c, i) => {
                return (
                  <Accordion
                    expanded={expanded === `panel${i}`}
                    onChange={handleChange(`panel${i}`)}
                    className={classes.accordionStyles}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${i}bh-content`}
                      id={`panel${i}bh-header`}
                    >
                      <Typography className={classes.heading}>
                        {c.curriculum_title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: c.curriculum_description,
                        }}
                      />
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </Container>

        <Card className={classes.mailBox}>
          <div style={{ padding: "1.5rem" }}>
            <p
              style={{
                margin: "0.5rem 0 0 0",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              We have made a tailored curriculum covering the latest
              industry-ready concepts to serve every individual’s learning
              desires.
            </p>
          </div>
          <div
            style={{
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <Button
                variant="contained"
                style={{ margin: "1.2rem 0 0 1rem" }}
                startIcon={<CloudDownloadIcon />}
                onClick={() => setOpen(true)}
              >
                Download
              </Button>
            </div>
          </div>
        </Card>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                  style={{ border: "1px solid blue", marginTop: "1rem" }}
                >
                  <ToggleButton
                    style={{
                      background: alignment === "Online" ? "blue" : "white",
                    }}
                    size="small"
                    value="Online"
                    aria-label="Online"
                  >
                    <p
                      style={{
                        margin: "0",
                        color: alignment === "Online" ? "white" : "blue",
                      }}
                    >
                      Online
                    </p>
                  </ToggleButton>
                  <ToggleButton
                    style={{
                      background: alignment === "OnDemand" ? "blue" : "white",
                    }}
                    size="small"
                    value="OnDemand"
                    aria-label="OnDemand"
                  >
                    <p
                      style={{
                        margin: "0",
                        color: alignment === "OnDemand" ? "white" : "blue",
                      }}
                    >
                      On-Demand
                    </p>
                  </ToggleButton>
                </ToggleButtonGroup>
                <h3>Customized Solutions For Your Teams</h3>
                <p><ChevronRightIcon color="primary" /> Upskill and reskill</p>
                <p><ChevronRightIcon color="primary" /> Assess and benchmark</p>
                <p><ChevronRightIcon color="primary" /> Get advanced learner insights</p>
                <p><ChevronRightIcon color="primary" /> Leverage immersive learning</p>
                {/* <div>
                  <img src={Learning} alt='learning' height="300px" width='auto' />
                </div> */}
              </div >
              {!thankyouPopup && <div style={{ position: "relative" }}>
                <div className={classes.closebttn} onClick={handleClose}>
                  <CloseIcon />{" "}
                </div>
                <h3>Request a Custom Quote for {alignment} Training</h3>
                <p>
                  Your Learning Advisor will get back to you within 24 hours
                </p>
                <form className={classes.modalForm} onSubmit={submitHandler}>
                  <div className={classes.inputDiv}>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      label="First Name"
                      name="fname"
                      variant="outlined"
                      style={{ marginRight: "1rem" }}
                    />
                    <TextField
                      id="outlined-basic"
                      size="small"
                      label="Last Name"
                      name="lname"
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.inputDiv}>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      label="Email"
                      name="email"
                      variant="outlined"
                      style={{ marginRight: "1rem" }}
                    />
                    <TextField
                      id="outlined-basic"
                      size="small"
                      label="Phone"
                      name="phone"
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.inputDiv}>
                    <TextField
                      id="Message"
                      label="Message"
                      name="message"
                      multiline
                      size="small"
                      rows={5}
                      // defaultValue="Default Value"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {/* <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      endIcon={<ChevronRightIcon />}
                    >
                      Get Custom Quote
                    </Button> */}
                    <CourseButtonComponent subject='Get Custom Quote' setOpen={setOpen} type={'submit'} />
                  </div>
                </form>
              </div>}
              {thankyouPopup && <div className={classes.thanksbox}>
                <CheckCircleOutlineIcon className={classes.checkicon} />
                <p className={classes.thanksText}>Thanks for choosing us, our expert will call u soon.</p>
              </div>}
            </div >
          </Fade >
        </Modal >
      </section >
    </div >
  );
}
