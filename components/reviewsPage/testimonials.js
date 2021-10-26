import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    marginLeft: 10,
    marginRight: 10,
    boxShadow: "none",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 1700px)": {
      maxWidth: 405,
      minHeight: 200,
    },
    "@media (max-width: 600px)": {
      maxWidth: 350,
      minHeight: 200,
    },
  },


  linkedin: {
    fontSize: "40px",
    position: "absolute",
    marginTop: "-40px",
    color: "#115293",
  },

  media: {
    height: 150,
    width: 288,
    marginBottom: "28px",
    width: "100%",
    borderRadius: "12px",
    margin: "auto",
  },
  firstPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    // border: '1px solid red',
    // marginBottom: "20px",
    padding: "60px 15px",

  },
  title: {
    fontSize: "32px",
    textAlign: "center",
  },
  line: {
    border: "none",
    borderTop: "4px solid #ffcf00",
    width: "10%",
    margin: "0px auto 30px auto",
  },

  line2: {
    borderTop: "4px solid #ffcf00",
    width: "10%",
    margin: "0px auto 20px auto",
  },

  name: {
    textAlign: "center",
    fontSize: "18px",
    margin: "0px 0px 10px 0px",
    fontWeight: "600",
    color: "#404040",
  },
  line: {
    border: "none",
    borderTop: "4px solid #ffcf00",
    width: "10%",
    margin: "0px auto 30px auto",
  },

  card: {
    margin: "20px 30px",
    padding: "20px",
    boxShadow: "0px 0px 1.42rem 0px rgb(0 0 0 / 19%)",
    // [theme.breakpoints.down("sm")]: {
    //   margin: "20px 0px",
    // },
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
    marginTop: "50px",
    "&:hover": {
      borderColor: "#003fc2",
      backgroundColor: "#003fc2",
    },
  },

  btnArrow: {
    fontSize: "16px",
    marginLeft: "10px"
  },


  designation: {
    textAlign: "center",
    margin: "0px 0px 10px 0px",
    fontSize: "16px",
    color: "#4a4a4a",
  },

  testimonial: {
    fontSize: "16px",
    display: "flex",
    flexDirection: "column",
    fontWeight: "400",
    color: "#5a5a5a",
    textAlign: "center",
  },

  quoteIcon: {
    position: "absolute",
    fontSize: "100px",
    marginTop: "-30px",
    marginLeft: "-30px",
    color: "#f3f4f6",
    zIndex: "1",
  },

  text: {
    minHeight: "120px",
    marginTop: "20px",
  },
  cardActions: {
    position: 'relative',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginTop: "50px",
    "&:hover": {
      borderColor: "#003fc2",
      backgroundColor: "#003fc2",
    },
  },

  btnArrow: {
    fontSize: "16px",
    marginLeft: "10px"
  },

  profileImg: {
    display: "block",
    margin: "auto",
  },


  container: {
    maxWidth: "1700px",
    "@media (max-width: 1700px)": {
      maxWidth: "1200px",
    },
    "@media (max-width: 600px)": {
      maxWidth: "320px",
    },
  },
});

function testimonials({ data }) {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(0);
  const [loadMore, setLoadMore] = useState(false);


  return (
    <section className={classes.firstPage}>
      <Container className={classes.container}>
        <div>
          <h2 className={classes.title}>Learners Reviews</h2>
          <div className={classes.line} />
        </div>
        <Grid container spacing={3}>

          {data.map((val, index) => {
            if (loadMore || index < 3) {
              return <Grid item lg={4} md={4} sm={6} xs={12}>
                <div>
                  <div className={classes.card}>
                    {val.linkedin_profile && <a href={val.linkedin_profile} ><LinkedInIcon className={classes.linkedin} /></a>}
                    <div className={classes.testimonial}>
                      <img className={classes.profileImg} style={{ width: "120px", height: "120px" }} src="https://tekslateassets.s3.amazonaws.com/images/profile.svg" alt="user reviews" />
                      <div>
                        {/* <FormatQuoteIcon className={classes.quoteIcon} /> */}
                        <p className={classes.text}>{val.description}</p>
                      </div>
                    </div>
                    <div className={classes.line2} />
                    <p className={classes.name}>{val.name}</p>
                    <p className={classes.designation}>{val.designation}</p>
                  </div>
                </div>
              </Grid>
            }
          })}

          <Grid item lg={12} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
            <Button className={classes.btn} onClick={() => setLoadMore(prevVal => !prevVal)}>Load more <ArrowForwardIosIcon className={classes.btnArrow} /></Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default testimonials;
