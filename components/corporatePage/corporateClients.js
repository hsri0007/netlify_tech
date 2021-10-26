import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  clients: {
    width: "120px",
    filter: "grayscale(1)",
    margin: "auto",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px",
    },
  },

  clientsBG: {
    padding: "43px 0 40px",
    backgroundColor: "#f9fafa",
  },

  mainhead: {
    fontSize: "28px",
    margin: "15px 0px",
    textAlign: "center",
  },

  line: {
    border: "none",
    margin: "0px auto 30px auto",
    borderTop: "4px solid #ffcf00",
    width: "10%",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <section className={classes.clientsBG}>
        <Container maxWidth="lg">
          <h3 className={classes.mainhead}>Corporate Clients</h3>
          <hr className={classes.line} />
          <Grid container>
            <Grid style={{ margin: "auto" }} item lg={2} md={3} sm={6} xs={6}>
              <img
                src="https://newtekslateassets.s3.us-west-2.amazonaws.com/assets/images/clients/zealousys.png"
                className={classes.clients}
              />
            </Grid>
            <Grid style={{ margin: "auto" }} item lg={2} md={3} sm={6} xs={6}>
              <img
                src="https://newtekslateassets.s3.us-west-2.amazonaws.com/assets/images/clients/consagous.png"
                className={classes.clients}
              />
            </Grid>
            <Grid style={{ margin: "auto" }} item lg={2} md={3} sm={6} xs={6}>
              <img
                src="https://newtekslateassets.s3.us-west-2.amazonaws.com/assets/images/clients/codiant.png"
                className={classes.clients}
              />
            </Grid>
            <Grid style={{ margin: "auto" }} item lg={2} md={3} sm={6} xs={6}>
              <img
                src="https://newtekslateassets.s3.us-west-2.amazonaws.com/assets/images/clients/appscrip.png"
                className={classes.clients}
              />
            </Grid>
            <Grid style={{ margin: "auto" }} item lg={2} md={3} sm={6} xs={6}>
              <img
                src="https://newtekslateassets.s3.us-west-2.amazonaws.com/assets/images/clients/promatics.png"
                className={classes.clients}
              />
            </Grid>
            <Grid style={{ margin: "auto" }} item lg={2} md={3} sm={6} xs={6}>
              <img
                src="https://newtekslateassets.s3.us-west-2.amazonaws.com/assets/images/clients/codebrightly.png"
                className={classes.clients}
              />
            </Grid>
          </Grid>
        </Container>
      </section>
    </React.Fragment>
  );
}
