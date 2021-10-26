import React from "react";
import Banner from "../blogPage/Banner";
import BlogContent from "../blogPage/blogContent";
import SocialIcons from "../blogPage/socialIcons";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Sidebar from "../blogPage/sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { getBlogsByURL, getRelatedBlogs } from "../../apiCalls";
import MetaTags from "../Meta/CourseMetaTags";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "60px 0px",
  },
  main: {
    // "width": "60%",
    // "height": "150vh"
  },
  sidebar: {
    height: "600px",
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    overflow: "auto",
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
  body: {
    backgroundColor: "#ccc",
    fontFamily: "sans-serif",
    padding: "10px",
  },
}));

// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const ContactPage = (props) => {
  // console.log('**********this is props**************: ', props.blogs[0]);
  const classes = useStyles();
  const blog = props?.blogs;
  const blog_category = blog?.blog_category;
  const blog_type = blog?.blog_type;
  const [relatedBlogs, setRelatedBlogs] = React.useState([]);
  React.useEffect(async () => {
    const related_blogs = await getRelatedBlogs({
      blog_category,
      blog_type,
      url_title: props.blogs.url_title,
    });
    // console.log('**********this is related_blogs***********: ', related_blogs);
    setRelatedBlogs(related_blogs.content);
  }, []);
  if (true) {
    console.log(props.blogs, "this is blog detail");
    return (
      <div>
        <MetaTags
          title={props.blogs.meta_title}
          description={props.blogs.meta_desc}
          imgUrl="https://tekslateassets.s3.amazonaws.com/images/logo.svg"
          cannonical={props.blogs.url_title}
        />
        <Banner blog={blog} />
        <SocialIcons />
        <Container maxWidth="lg">
          <Grid className={classes.wrapper} container spacing={3}>
            <Grid
              className={classes.sidebar}
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
            >
              <Sidebar relatedBlogs={relatedBlogs} />
            </Grid>
            <Grid className={classes.main} item lg={9} md={9} sm={12} xs={12}>
              <BlogContent blog={blog} />
            </Grid>
          </Grid>
          <button></button>
        </Container>
      </div>
    );
  } else {
    return <div>404 page not Found</div>;
  }
};

// export async function getStaticProps(ctx) {
//   const data = ctx.params.page;
//   const blogs = await getBlogsByURL({ search_string: data });

//   return {
//     props: {
//       blogs,
//       data,
//     }, // will be passed to the page component as props
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: { page: "tutorials-tableau" },
//       },
//     ],
//     fallback: "blocking",
//   };
// }

export default ContactPage;
