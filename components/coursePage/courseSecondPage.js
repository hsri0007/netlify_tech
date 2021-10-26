// import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ScrollSpyTabs from "./CourseScrollTabs/CourseScrollTabs";
import Overview from "../coursePage/Overview/Overview";
import Curriculum from "../coursePage/Curriculum/Curriculum";
import Objectives from "../coursePage/Objectives/Objectives";
import TrainingOptions from "../coursePage/TrainingOptions/TrainingOptions";
import Faqs from "../coursePage/Faqs/Faqs";
// import RelatedCourses from './RelatedCourses/RelatedCourses';
import Testimonials from "../testimonials/testimonials";
import ProjectsComponent from "./Projects/ProjectsComponent";
import CorparateComponent from "./CorparateFields/CorparateComponent";

const courseSecondPage = ({ data }) => {
  return <>
    <ScrollSpyTabs data={data}
      tabsInScroll={[
        {
          text: "Key Features",
          component: <Overview data={data} />,
        },
        {
          text: "Curriculum",
          component: <Curriculum data={data} />,
        },
        {
          text: "Projects",
          component: <ProjectsComponent data={data} />,
        },
        {
          text: "Objectives",
          component: <Objectives data={data} />,
        },
        {
          text: "Training Options",
          component: <TrainingOptions data={data} />,
        },
        {
          text: "Corporate",
          component: <CorparateComponent data={data} />,
        },
        {
          text: "Reviews",
          component: <Testimonials data={data} />,
        },
        {
          text: "Faqs",
          component: (
            <Faqs value={data.faq} coursedetails={data.overview.course} />
          ),
        },
      ]}
    />
  </>
};

export default courseSecondPage;
