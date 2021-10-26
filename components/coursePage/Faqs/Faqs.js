import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionComponent from '../AccordionComponent/AccordionComponent';
import HeadingsComponent from "../HeadingsComponent/HeadingsComponent";
import FormModalComponent from '../FormModal/FormModal';
import CourseButtonComponent from "../CourseButtonComponent/CourseButtonComponent";

const useStyles = makeStyles((theme) => ({
  sideElement: {
    textAlign: "center",
    marginBottom: 0,
    marginTop: 0,
    // fontSize: "24px",
  },
  section: {
    width: "65%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: '80%'
    },
    [theme.breakpoints.down("sm")]: {
      width: '95%'
    },
  },
}));

export default function Faqs({ value, coursedetails, course }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [open, setOpen] = useState(false);
  const [thankyouPopup, setThankyouPopup] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setThankyouPopup(false);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const ReadMoreFunc = () => {
    setToggle(!toggle);
  };

  const check = toggle ? 2 : value.length;

  return (
    <div id="Faq__bar">
      <section className={classes.section}>
        <Container>
          <div className={classes.sideElement}>
            <HeadingsComponent first={coursedetails} last="FAQ'S" />
            <p style={{ paddingBottom: '1rem' }}>
              Have questions? We’ve got the answers. Get the details on how you
              can grow in this course.
            </p>
          </div>
          {/* <Grid container spacing={3}> */}
          <div style={{ padding: "1rem 0" }}>
            {value.map((c, i) => {
              return (
                i <= check && (
                  <AccordionComponent
                    handleChange={handleChange}
                    expanded={expanded}
                    i={i}
                    title={c.faq_title}
                    description={c.faq_description}
                  />
                )
              );
            })}
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: '1.5rem'
              }}
            >
              <Button
                // variant="contained"
                color="primary"
                onClick={ReadMoreFunc}
              >
                {toggle ? "read more" : "read less"}
              </Button>
              <CourseButtonComponent subject='Get Details' setOpen={setOpen} arrow={false} />
            </div>
          </div>
          {/* </Grid> */}
        </Container>
        <FormModalComponent course={course} value={open} handleClose={handleClose} thankyouPopup={thankyouPopup} setThankyouPopup={setThankyouPopup} />
      </section>
    </div>
  );
}
