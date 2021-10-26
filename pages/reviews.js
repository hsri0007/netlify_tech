import React from "react";
import Banner from "../components/reviewsPage/Banner";
import SocialReviews from "../components/reviewsPage/SocialReviews";
import CorporateReviews from "../components/reviewsPage/CorporateReviews";
import Testimonials from "../components/reviewsPage/testimonials";
import ContactForm from "../components/contactForm/contactForm";
import { getAllReviews } from "../apiCalls";
import MetaTags from "../components/Meta/CourseMetaTags";
// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const ReviewsPage = (props) => {
  const data = props.final_obj;
  // console.log('***********this is data***********: ', data);
  return (
    <div>
      <MetaTags
        title='Reviews - TekSlate'
        description="Find the TekSlate reviews provided by the students, learners, and trainers on our live, self-paced, corporate training services."
        imgUrl='https://tekslateassets.s3.amazonaws.com/images/logo.svg' cannonical='reviews' />
      <Banner />
      <SocialReviews />
      {/* <CorporateReviews /> */}
      <Testimonials data={data} />
      <ContactForm subject={"Enquiry from reviews page"} />
    </div>
  );
};

export async function getStaticProps() {
  const details = {
    limit: 9,
    offset: 0,
  };
  const allReviews = await getAllReviews(details);

  return {
    props: {
      ...allReviews,
    }, // will be passed to the page component as props
  };
}

export default ReviewsPage;
