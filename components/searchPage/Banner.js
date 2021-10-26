import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import SearchIcon from "@material-ui/icons/Search";
import { getAllCourses, getAllCategories, getAllCourseOffers } from "../../apiCalls";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  maintext: {
    color: "#3e3d3d",
    fontSize: "34px",
    fontWeight: "500",
    margin: "auto",
    padding: "0px 0px 15px 0px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },

  type: {
    textAlign: "center",
    fontSize: "14px",
    color: "#1358db",
  },

  date: {
    textAlign: "center",
    fontSize: "14px",
  },

  bannerbg: {
    backgroundImage: `url("https://tekslateassets.s3.amazonaws.com/images/design_bg.svg")`,
    background: "#101d42",
    display: "flex",
    alignItems: "center",
  },

  banner_main: {
    margin: "auto",
    background: "white",
    marginBottom: "-52px",
    marginTop: "52px",
    // border: "1px solid grey",
    boxShadow: "0 0 0 1px #e7e7e7, 0 2px 4px 0 rgb(0 0 0 / 10%)",
    padding: "30px 50px",
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

  type: {
    textAlign: "center",
    fontSize: "14px",
    color: "#1358db",
    marginTop: "0px",
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
  icon_search: {
    position: "absolute",
    fontSize: "20px",
    marginTop: "10px",
    marginLeft: "10px",
    zIndex: 5,
    color: "#929292",
  },
  input_search: {
    width: "100%",
    color: "white",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 1px 4px 0 rgb(31 38 74 / 14%)",
    backdropFilter: "blur(5.5px)",
    // -webkit-backdrop-filter: blur(5.5px);
    borderRadius: "0.25rem 0px 0px 0.25rem",
    border: " 1px solid #1565c0",
    height: "calc(1.5em + .75rem + 2px)",
    padding: "10px 5px 10px 40px",
    fontSize: "1rem",
    "&:focus": {
      color: "black !important",
      backgroundColor: "white",
      border: "none !important",
      outline: "none !important",
    },
  },
}));

const Banner = ({ setCourses, setSearchTrue, courses }) => {
  const classes = useStyles();
  const [searchString, setSearchString] = useState("");

  const handleSearch = async (e) => {
    // setloading(true);
    if (e.target.value.trim() === '') setSearchTrue(false);
    else setSearchTrue(true);
    setSearchString(e.target.value);
    const allCourses = await getAllCourses({ search_string: e.target.value });
    // console.log('*************this is allCourses*************: ', allCourses);
    setCourses(allCourses.final_obj);
  };

  return (
    <div>
      <section className={classes.bannerbg}>
        <Container className={classes.banner_main} maxWidth="md">
          <p className={classes.type}>Home / Search</p>
          {courses.length !== 1 && <h2 className={classes.maintext}>
            {courses.length} Results found
          </h2>}
          {courses.length === 1 && <h2 className={classes.maintext}>
            {courses.length} Result found
          </h2>}
          <form>
            <SearchIcon className={classes.icon_search} />
            <input type="hidden" name="searchString" />
            <input
              id="search-nav"
              className={classes.input_search}
              type="text"
              placeholder="What do you want to learn"
              type="search"
              autocomplete="off"
              onChange={handleSearch}
              value={searchString}
            />
          </form>
        </Container>
      </section>
    </div>
  );
};

export default Banner;
