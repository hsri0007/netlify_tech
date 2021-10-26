import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({

  clients: {
    height: "30px",
    filter: 'grayscale(1)',
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0px",
    },
  },

  ratingBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  },


  clientsBG: {
    padding: "43px 0 40px",
    backgroundColor: "#f9fafa",

  },

  mainhead: {
    fontSize: '28px',
    margin: '15px 0px',
    textAlign: "center",
  },

  line: {
    border:"none",
    margin: '0px auto 30px auto',
    borderTop: "4px solid #ffcf00",
    width: '10%',
  },


  rating: {
    fontSize: "30px",
    fontWeight: "600",
    margin: "5px 25px 5px 5px",
  },

  
link_social: {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
}

}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <section className={classes.clientsBG}>
        <Container maxWidth="lg">
          <Grid container >
            <Grid style={{ margin: "auto" }} item lg={4} md={6} sm={6} xs={12}>
              <div className={classes.ratingBox}><a className={classes.link_social} target="_blank" href="https://www.trustpilot.com/review/tekslate.com"><p className={classes.rating}>4.1</p><img src="https://tekslateassets.s3.amazonaws.com/images/reviews/trustpilot.svg" className={classes.clients} /></a></div>
            </Grid>
            <Grid style={{ margin: "auto" }} item lg={4} md={6} sm={6} xs={12}>
              <div className={classes.ratingBox}><a className={classes.link_social} target="_blank" href="https://www.glassdoor.co.in/Overview/Working-at-TekSlate-EI_IE1663782.11,19.htm?countryRedirect=true"><p className={classes.rating}>5.0</p><img src="https://tekslateassets.s3.amazonaws.com/images/reviews/glassdoor.svg" className={classes.clients} /></a></div>
            </Grid>
            <Grid style={{ margin: "auto" }} item lg={4} md={6} sm={6} xs={12}>
              <div className={classes.ratingBox}><a className={classes.link_social} target="_blank" href="https://www.sitejabber.com/reviews/tekslate.com"><p className={classes.rating}>5.0</p><img src="https://tekslateassets.s3.amazonaws.com/images/reviews/sitejabber.svg" className={classes.clients} /></a></div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </React.Fragment>
  );
}
