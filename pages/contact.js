import React from "react";
import Banner from "../components/contactForm/contactForm";
import Contact from "../components/contactPage/Contact";
import MetaTags from '../components/Meta/CourseMetaTags';
// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const ContactPage = () => {
  return (
    <div>
      <MetaTags
        title='Contact Us | We are here to solve your Queries - TekSlate'
        description="Contact TekSlate and resolve all your queries, Which are Related to ✔️Corporate Training ✔️Live Training ✔️Trainer Programs ✔️24/7 Support"
        imgUrl='https://tekslateassets.s3.amazonaws.com/images/logo.svg' cannonical='contact' />
      <Banner />
      <Contact />
    </div>
  );
};

export default ContactPage;
