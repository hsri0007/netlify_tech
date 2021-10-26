import React from "react";
import Banner from "../components/disclaimer/Banner";
import Description from "../components/disclaimer/description";
import ContactForm from "../components/contactForm/contactForm";
import MetaTags from "../components/Meta/CourseMetaTags";

// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const Disclaimer = () => {
  return (
    <div>
      <MetaTags
        title='Terms and Conditions | Privacy Policy - TekSlate'
        description='Find all the information related to TekSlate Privacy Policy, Terms and Conditions. If you have any Questions mail us.'
        imgUrl='https://tekslateassets.s3.amazonaws.com/images/logo.svg' cannonical='terms-and-conditions' />
      <Banner />
      <Description />
      <ContactForm />
    </div>
  );
};

export default Disclaimer;
