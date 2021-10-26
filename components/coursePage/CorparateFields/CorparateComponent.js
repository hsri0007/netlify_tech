import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CourseButtonComponent from "../CourseButtonComponent/CourseButtonComponent";
import Container from '@material-ui/core/Container';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HeadingsComponent from "../HeadingsComponent/HeadingsComponent";
import FormModalComponent from '../FormModal/FormModal';

const useStyles = makeStyles((theme) => ({
  corporateMain: {
    width: '80%',
    margin: '0 auto',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    },
  },
  arrowStylePara: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const CorparateComponent = ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [thankyouPopup, setThankyouPopup] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setThankyouPopup(false);
  };

  var course = data.overview.course.replace(' Training', '');

  return (
    <Container>
      <div style={{ textAlign: 'center', margin: '4rem 0 2rem 0' }}>
        <HeadingsComponent first='Corporates' last='Training' />
      </div>
      <div className={classes.corporateMain}>
        <h2>Experience and witness the express transformation of your workforce from the world-class tech upgrade platform.</h2>
        <p className={classes.arrowStylePara}><ChevronRightIcon color="primary" /> Customized training options</p>
        <p className={classes.arrowStylePara}><ChevronRightIcon color="primary" /> Tailored curriculum to fit your project needs.</p>
        <p className={classes.arrowStylePara}><ChevronRightIcon color="primary" /> Practical exposure is assured.</p>
        <p>We have got everything covered for any IT upgrade for your organization. We are one click away. </p>
        <div>
          <CourseButtonComponent subject='Get in Touch' setOpen={setOpen} />
        </div>
      </div>

      <FormModalComponent course={course} value={open} handleClose={handleClose} subject={"Corporate Enquiry"} thankyouPopup={thankyouPopup} setThankyouPopup={setThankyouPopup} />

    </Container>
  )
}

export default CorparateComponent;