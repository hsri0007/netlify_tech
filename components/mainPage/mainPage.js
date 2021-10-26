import CourseMetaTag from '../coursePage/CourseMetaTags';
import RelatedCourses from "../coursePage/RelatedCourses/RelatedCourses";
import CourseForm from "../coursePage/CourseForm/courseForm";
import CoursePage from "../coursePage/coursePage";
import CourseSecondPage from "../coursePage/courseSecondPage";
// import FooterComponent from "../footerComponent/footerComponent";
import BlogPage from "../blogPage/Banner";

const Course = ({ type, data }) => {

  return (
    <>
      {type === "course" ? (
        <div>
          <CourseMetaTag data={data} />
          <CoursePage data={data} />
          <CourseSecondPage data={data} />
          <CourseForm data={data} subject={"Demo Session"} />
          {data.related_courses && data.related_courses.length > 0 && <RelatedCourses data={data} />}
          {/* {data.related_courses.length > 0 && <RelatedCourses data={data} />} */}
        </div>
      ) : (
        <div>
          <BlogPage />
        </div>
      )}
    </>
  );
};

export default Course;
