import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import HeadingsComponent from "../HeadingsComponent/HeadingsComponent";
import AccordionComponent from '../AccordionComponent/AccordionComponent';
import FormModalComponent from '../FormModal/FormModal';
import RequestCallBack from "./RequestCallBack";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "18px 0",
  },
  objectivesContainer: {
    display: 'grid',
    gridTemplateColumns: '70% auto',
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: '100%',
    },
    '& > div:last-child': {
      [theme.breakpoints.down("md")]: {
        display: 'none'
      },
    }
  },
  '&.MuiAccordionSummary-root': {
    '&:hover': {
      // background: '#000',
      color: '#ffcf00'
    }
  },
  contactUs: {
    display: 'block',
    padding: '16px 25px',
    transition: 'all .8s ease',
    width: '300px',
    margin: ' 0 auto',
    height: '140px',
    boxShadow: '0 2px 8px 0 rgb(0 0 0 / 24%)',
    [theme.breakpoints.down("md")]: {
      display: 'none'
    },
  }
}));

export default function Objectives({ data }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [open, setOpen] = React.useState(false);

  const [thankyouPopup, setThankyouPopup] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setThankyouPopup(false);
  };

  var course = data.overview.course.replace(' Training', '');

  return (
    <div id="Objectives">
      <section className={classes.section}>
        <Container style={{ padding: '0 0.5rem' }}>
          <HeadingsComponent first={data.overview.course} last='Objectives' />
          <div className={classes.objectivesContainer}>
            <div style={{ paddingBottom: '1rem', }}>
              {data.objectives.map((c, i) => {
                return <AccordionComponent
                  handleChange={handleChange}
                  expanded={expanded}
                  i={i}
                  title={c.overview_title}
                  description={c.overview_description}
                />
              })}
            </div>
            <div>
              <RequestCallBack setOpen={setOpen} />
            </div>
          </div>

        </Container>
        <FormModalComponent course={course} value={open} handleClose={handleClose} thankyouPopup={thankyouPopup} setThankyouPopup={setThankyouPopup} />

      </section>
    </div>
  );
}