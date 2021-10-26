import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  section: {
    padding: "20px 0px",
  },
  heading: {
    fontSize: "14px",
    display: "block",
    fontWeight: "500",
  },

  title: {
    textAlign: "center",
    fontSize: "20px",
    margin: "10px 0px 15px 0px",
    fontWeight: "600",
  },

  accordion: {
    boxShadow: "none",
    borderBottom: "1px solid #ececec",
  },

  ul: {
    listStyle: "none",
    paddingLeft: "10px",
    margin: "0px",
  },

  a: {
    fontSize: "14px",
    textDecoration: "none",
    color: "#585858",
    margin: "10px 0px",
  },

  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

  checkCourse: {
    marginBottom: "10px",
    background: "#1358db",
    color: "white",
    borderRadius: "5px",
    padding: "5px 0px",

    "& span": {
      fontFamily: "inherit",
      fontSize: "14px",
      color: "white",
    },
  },
  // categoryCard:{
  //     display:"block",
  // },
}));

const Sidebar = ({ categories, state, handleChange }) => {
  const classes = useStyles();
  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div>
      <section className={classes.section}>
        <h4 className={classes.title}>Categories</h4>
        <div>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              {categories?.map((val) => {
                return (
                  <FormControlLabel
                    className={classes.checkCourse}
                    control={<Checkbox onChange={handleChange} name={val.id} />}
                    label={val.name}
                  />
                );
              })}
            </FormGroup>
          </FormControl>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
