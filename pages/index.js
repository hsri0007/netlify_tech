// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import HomeComponent from "../components/homePage/homeComponent";
import FirstPage from "../components/homePage/firstPage";
import Category from "../components/homePage/category";
import CorporateClients from "../components/homePage/clienthome";
import Clients from "../components/homePage/clients";
import Benifits from "../components/homePage/benifits";
import BlogsHome from "../components/homePage/blogsHome";
import Testimonials from "../components/homePage/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTrendingCourses } from "../apiCalls";
import ContactForm from "../components/contactForm/contactForm";
import MetaTags from "../components/Meta/CourseMetaTags";
import SocialReviews from "../components/reviewsPage/SocialReviews";

function Home(props) {
  // console.log(props);
  return (
    <div>
      <MetaTags
        title="TekSlate - Best Online Training & Certification Course Provider"
        description="TekSlate ➔ World's Best E-Learning Training Platform ✔️Expert Instructors ✔️Live Classes ✔️Self-Paced Videos ✔️Corporate Training"
        imgUrl="https://tekslateassets.s3.amazonaws.com/images/logo.svg"
        cannonical="home"
      />
      <main>
        <HomeComponent trending={props.trending} />
        <CorporateClients trending={props.trending} />
        <FirstPage trending={props.trending} />
        <Category trending={props.trending} />
        <Clients trending={props.trending} />
        <Testimonials trending={props.trending} />
        <SocialReviews />
        <Benifits trending={props.trending} />
        <BlogsHome trending={props.trending} />
        <ContactForm />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data_trending = await getTrendingCourses("trending");
  const data_popular = await getTrendingCourses("popular");

  // up_data.trending = JSON.parse(JSON.stringify(data_trending.data.trends));
  // up_data.popular = JSON.parse(JSON.stringify(data_popular.data.pops));
  // console.log(data_popular.data?.pops);
  return {
    props: {
      trending: data_trending.data.trends,
      asa: data_popular.data?.pops,
      // trending: [],
      // asa: [],
    }, // will be passed to the page component as props
  };
}

export default Home;
