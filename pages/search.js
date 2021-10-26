import React from "react";
import Banner from "../components/searchPage/Banner";
import Courses from "../components/searchPage/Courses";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Sidebar from "../components/searchPage/sidebar";
import { makeStyles } from "@material-ui/core/styles";
import {
  getAllCourses,
  getAllCategories,
  getAllCourseOffers,
} from "../apiCalls";
import MetaTags from "../components/Meta/CourseMetaTags";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "120px 0px 60px 0px",
  },
  main: {
    // "width": "60%",
    // "height": "150vh"
  },
  sidebar: {
    height: "600px",
    backgroundImage: `url("https://tekslateassets.s3.amazonaws.com/images/doodle.svg")`,
    backgroundSize: "cover",
    boxShadow: "0 0 0 1px #e7e7e7, 0 2px 4px 0 rgb(0 0 0 / 10%)",
    backgroundRepeat: "no-repeat",
    // border: "1px solid #1358db",
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    overflow: "auto",
    padding: "12px 24px !important",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sidebar2: {
    top: "0",
    height: "600px",
    overflow: "auto",
    position: "fixed",
    width: "100%",
    zIndex: "1000",
    background: "white",
  },
}));

// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const SearchPage = (props) => {
  const classes = useStyles();
  // console.log('*********this is props*********: ', props);
  const [categories, setCategories] = React.useState(props?.allCategories.final_obj);
  const [state, setState] = React.useState({});
  const [courses, setCourses] = React.useState(props?.allCourses.final_obj);
  const [searchTrue, setSearchTrue] = React.useState(false);

  const handleChange = (event) => {
    setState((prevState) => {
      if (!event.target.checked) {
        delete prevState[event.target.name];
        return { ...prevState };
      } else {
        return { ...prevState, [event.target.name]: event.target.checked };
      }
    });
  };

  return (
    <div>
      <MetaTags
        title='Search TekSlate Online Courses And Blogs'
        description="Find TekSlate Courses & Blogs. World's leading certification training providers helps to get ahead in IT field like Hadoop, Salesforce , BI Tools, Informatica and more 450+ courses"
        imgUrl='https://tekslateassets.s3.amazonaws.com/images/logo.svg' cannonical='search' />
      <Banner setCourses={setCourses} setSearchTrue={setSearchTrue} courses={courses} />
      <Container maxWidth="lg">
        <Grid className={classes.wrapper} container spacing={3}>
          <Grid className={classes.sidebar} item lg={3} md={3} sm={12} xs={12}>
            <Sidebar
              categories={categories}
              state={state}
              handleChange={handleChange}
            />
          </Grid>
          <Grid className={classes.main} item lg={9} md={9} sm={12} xs={12}>
            <Courses
              state={state}
              courses={courses}
              course_offers={props.courseOffers}
              searchTrue={searchTrue}
            />
          </Grid>
        </Grid>
        <button></button>
      </Container>
    </div>
  );
};

// export async function getStaticProps() {
//   const details = {
//     search_string: "",
//     // limit: 10,
//     offset: 0,
//   };
//   const allCourses = await getAllCourses(details);
//   const allCategories = await getAllCategories();
//   const allCourseOffers = await getAllCourseOffers();

export async function getStaticProps() {
  const details = {
    search_string: "",
    // limit: 10,
    offset: 0,
  };
  const allCourses = await getAllCourses(details);
  const allCategories = await getAllCategories({});
  const allCourseOffers = await getAllCourseOffers();

  var courseOffers = {};
  for (let val of allCourseOffers) {
    courseOffers[val.course_id] = {
      actual_price: val.actual_price,
      selling_price: val.selling_price,
      actual_price_usd: val.actual_price_usd,
      selling_price_usd: val.selling_price_usd,
      actual_price_self_paced: val.actual_price_self_paced,
      selling_price_self_paced: val.selling_price_self_paced,
      actual_price_usd_self_paced: val.actual_price_usd_self_paced,
      selling_price_usd_self_paced: val.selling_price_usd_self_paced
    };
  }

  return {
    props: {
      allCourses,
      allCategories,
      courseOffers
    }, // will be passed to the page component as props
  };
}

export default SearchPage;
