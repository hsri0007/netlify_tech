import React from "react";
import Banner from "../components/corporatePage/Banner";
import Description from "../components/corporatePage/description";
import Testimonials from "../components/corporatePage/testimonials";
import CorporateClients from "../components/corporatePage/corporateClients";
import ContactForm from "../components/contactForm/contactForm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestCourses from "../components/corporatePage/bestCourses";
import MetaTags from "../components/Meta/CourseMetaTags";
// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const CorporatePage = () => {
  return (
    <div>
      <MetaTags
        title='Corporate Training - TekSlate'
        description="Get TekSlate Online and Live Corporate training in IT, Project Management, Digital Marketing, Big Data, Cloud, and many other emerging technologies."
        imgUrl='https://tekslateassets.s3.amazonaws.com/images/logo.svg' cannonical='corporate ' />
      <Banner />
      <Description />
      <CorporateClients />
      <BestCourses />
      <Testimonials />
      <ContactForm  />
    </div>
  );
};

export default CorporatePage;
