import React from "react";
import Banner from "../components/aboutPage/Banner";
import Description from "../components/aboutPage/description";
import ContactForm from "../components/contactForm/contactForm";
import MetaTags from "../components/Meta/CourseMetaTags";
// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const AboutPage = () => {
  return (
    <div>
      <MetaTags
        title='TekSlate - Best E-Learning Platform for IT Professional Courses'
        description="Provides Best-in-Class Quality Training ➔ from Beginners to Professionals through Online ➔ Learn the High in-demand Skills to Scale-up your Career!"
        imgUrl='https://tekslateassets.s3.amazonaws.com/images/logo.svg' cannonical='about' />
      <Banner />
      <Description />
      <ContactForm />
    </div>
  );
};

export default AboutPage;
