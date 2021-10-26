import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PinDropIcon from "@material-ui/icons/PinDrop";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  section: {
    padding: "10px 0px",
  },

  mainhead: {
    fontSize: "28px",
    margin: "15px 0px",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  icon: {
    marginBottom: "-4px",
    marginRight: "5px",
    color: "#959fb2",
  },

  detail: {
    fontSize: "14px",
    color: "#212121",
  },

  line: {
    border:"none",
    margin: "0px",
    borderTop: "4px solid #ffcf00",
    width: "10%",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },

  coursecard: {
    boxShadow: "0 0 0 1px #e7e7e7, 0 2px 4px 0 rgb(0 0 0 / 10%)",
    padding: "5px 20px",
    marginBottom: "30px",
  },
  starbox: {
    display: "flex",
    justifyContent: "flex-start",
    color: "#ffd400",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      margin: "0px",
    },
  },
  price: {
    fontSize: "26px",
    fontWeight: "600",
    color: "#1358db",
    marginBottom: "0px",
    textAlign: "center",
  },
  pricestrike: {
    fontSize: "16px",
    fontWeight: "500",
    color: "grey",
    textAlign: "center",
    marginTop: "0px",
    textDecoration: "line-through",
  },

  priceTag: {
    marginRight: "10px",
  },

  timeBox: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      margin: "0px",
    },
  },

  timeicon: {
    marginRight: "10px",
  },
}));

const Courses = ({ state, courses, course_offers, searchTrue }) => {
  const classes = useStyles();
  // console.log('************this is courses**************: ', courses);
  return (
    <div>
      <section className={classes.section}>
        <Container maxWidth="md">
          {!searchTrue &&
            courses?.map((val, index) => {
              if (
                (Object.keys(state).length === 0 ||
                  (state[val.category] !== null &&
                    state[val.category] !== undefined &&
                    state[val.category] !== false)) &&
                val.status === 1
              ) {
                return (
                  <a href={`/${val.url_title}`}>
                  <Grid className={classes.coursecard} container spacing={3}>
                   
                      <Grid item lg={9} md={9} sm={12} xs={12}>
                        <h3 className={classes.mainhead}>{val.course}</h3>
                        <hr className={classes.line} />
                        <p>{val.meta_desc}</p>
                        <Grid container spacing={3}>
                          <Grid item lg={6} md={6} sm={12} xs={12}>
                            <p className={classes.starbox}>
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarHalfIcon />
                              &nbsp;
                              <span style={{ color: "grey" }}>
                                &nbsp;{val.rating}({val.enrolled})
                              </span>
                            </p>
                          </Grid>
                          <Grid
                            style={{ padding: "12px" }}
                            lg={6}
                            md={6}
                            sm={12}
                            xs={12}
                          >
                            <p className={classes.timeBox}>
                              <QueryBuilderIcon className={classes.timeicon} />
                              {val.duration} hours
                            </p>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        style={{ margin: "auto" }}
                        lg={3}
                        md={3}
                        sm={12}
                        xs={12}
                      >
                        {course_offers[val.id] !== undefined &&
                          course_offers[val.id] !== null &&
                          course_offers[val.id].selling_price !== 0 && (
                            <p className={classes.price}>
                              <span className={classes.priceTag}>RS</span>
                              {course_offers[val.id].selling_price}
                            </p>
                          )}
                        {course_offers[val.id] !== undefined &&
                          course_offers[val.id] !== null &&
                          course_offers[val.id].actual_price !== 0 && (
                            <p className={classes.pricestrike}>
                              <span className={classes.priceTag}>RS</span>
                              {course_offers[val.id].actual_price}
                            </p>
                          )}
                      </Grid>
                    
                  </Grid>
                  </a>
                );
              }
            })}
          {searchTrue &&
            courses.map((val, index) => {
              if (val.status === 1) {
                return (
                  <a href={`/${val.url_title}`}>
                  <Grid className={classes.coursecard} container spacing={3}>
                    
                      <Grid item lg={9} md={9} sm={12} xs={12}>
                        <h3 className={classes.mainhead}>{val.course}</h3>
                        <hr className={classes.line} />
                        <p>{val.meta_desc}</p>
                        <Grid container spacing={3}>
                          <Grid item lg={6} md={6} sm={12} xs={12}>
                            <p className={classes.starbox}>
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarHalfIcon />
                              &nbsp;
                              <span style={{ color: "grey" }}>
                                &nbsp;{val.rating}({val.enrolled})
                              </span>
                            </p>
                          </Grid>
                          <Grid
                            style={{ padding: "12px" }}
                            lg={6}
                            md={6}
                            sm={12}
                            xs={12}
                          >
                            <p className={classes.timeBox}>
                              <QueryBuilderIcon className={classes.timeicon} />
                              {val.duration} hours
                            </p>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item 
                        lg={3}
                        md={3}
                        sm={12}
                        xs={12}
                      >
                        {course_offers[val.id] !== undefined &&
                          course_offers[val.id] !== null &&
                          course_offers[val.id].selling_price !== 0 && (
                            <p className={classes.price}>
                              <span className={classes.priceTag}>RS</span>
                              {course_offers[val.id].selling_price}
                            </p>
                          )}
                        {course_offers[val.id] !== undefined &&
                          course_offers[val.id] !== null &&
                          course_offers[val.id].actual_price !== 0 && (
                            <p className={classes.pricestrike}>
                              <span className={classes.priceTag}>RS</span>
                              {course_offers[val.id].actual_price}
                            </p>
                          )}
                      </Grid>
                   
                  </Grid>
                  </a>
                );
              }
            })}
        </Container>
      </section>
    </div>
  );
};

export default Courses;
