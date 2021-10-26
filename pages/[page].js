import React from "react";
import { getData } from "../apiCalls";
import { static_course_paths } from "../path";

import MainPage from "../components/mainPage/mainPage";
import MainPageBlog from "../components/blogcomponentnew/blogcomponentnew";

const Course = (props) => {
  // console.log(props.trending.course_info, "type");
  // console.log(props.trending.course_info.overview, "meta info");
  if (props.type === "course") {
    return (
      <div>
        <MainPage type="course" data={props.trending.course_info} />
      </div>
    );
  } else {
    return (
      <div>
        <MainPageBlog blogs={props.trending.course_info} />
        {/* {JSON.stringify(props.trending.course_info)} */}
      </div>
    );
  }
};

export async function getStaticProps(ctx) {
  try {
    const data = await getData(ctx.params.page);
    // console.log(props.trending.course_info, "type");
    // console.log(data.type);
    if (!data) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          trending: data,
          type: data.type,
        }, // will be passed to the page component as props
        // revalidate: 1,
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticPaths() {
  const paths = static_course_paths.map((arg) => {
    return { params: { page: arg } };
  });

  // return {
  //   paths: [
  //     {
  //       params: { page: "angularjs-training" },
  //     },
  //   ],
  //   fallback: "blocking",
  // };
  return {
    paths,
    fallback: "blocking",
  };
}

export default Course;
