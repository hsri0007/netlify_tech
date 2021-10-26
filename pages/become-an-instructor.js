import React from "react";
import Banner from "../components/becomeAnInstructor/Banner";
import Description from "../components/becomeAnInstructor/description";
import ContactForm from "../components/contactForm/contactForm";
import MetaTags from "../components/Meta/CourseMetaTags";
// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const becomeAnInstructor = () => {
  return (
    <div>
      <MetaTags
        title='Become an Instructor - TekSlate'
        description="Are you passionate about teaching and sharing your expertise on any technology with the community then TekSlate is the right platform for you. Contact Us."
        imgUrl='https://tekslateassets.s3.amazonaws.com/images/logo.svg' cannonical='become-an-instructor' />
      <Banner />
      <Description />
      <ContactForm />
    </div>
  );
};

export default becomeAnInstructor;
