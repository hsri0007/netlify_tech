import { Container, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  maintext: {
    color: " #fff",
    fontSize: "40px",
    fontWeight: "500",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },

  desp: {
    fontSize: "16px",
    color: "white",
  },

  bannerbg: {
    backgroundImage: `url("https://tekslateassets.s3.amazonaws.com/images/instructor_banner.jpg")`,
    backgroundPosition: "center center",
    minHeight: "300px",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
  },
  input: {
    background: "white",
    color: "black",
    width: "100%",
    borderRadius: "3px",
    div: {
      background: "white !important",
      padding: "15px !important",
      borderRadius: "5px !important",
      color: "black !important",
    },
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
    marginTop: "10px",
    "&:hover": {
      borderColor: "#003fc2",
      backgroundColor: "#003fc2",
    },
  },

  btnArrow: {
    fontSize: "16px",
    marginLeft: "10px",
  },

  textarea: {
    background: "white",
    color: "black",
    width: "100%",
    borderRadius: "3px",
    // height: '80px',
    overflow: "hidden",
    padding: "10px",
    fontSize: "16px",
    fontFamily: "inherit",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div>
      <section className={classes.bannerbg}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <h2 className={classes.maintext}>Become An Instructor</h2>
              
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Banner;
