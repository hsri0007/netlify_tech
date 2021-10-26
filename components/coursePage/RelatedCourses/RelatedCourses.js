import React, { useState } from "react";
import CarouselComponent from "../../CarouselComponent/Carousel";
import Container from "@material-ui/core/Container";
import HeadingsComponent from "../HeadingsComponent/HeadingsComponent";

const RelatedCourses = ({ data }) => {
  const related_courses = data.related_courses.map((val) => {
    return {
      slug: val.url_title,
      name: val.course,
      duration: 15,
      imgUri: val.image,
      designation: "AWS",
      trending: true,
      description:
        "I have got trained for AWS from UnitedSkill. I am happy with the training and the trainer. Explanatory sessions with practical hands-on labs helped me gain industrial experience in the virtual classroom itself. I would recommend UnitedSkill.",
      rating: val.rating,
    };
  });
  const [reviews, setState] = useState(related_courses);
  // console.log(reviews, 'total courses')

  return (
    <div style={{ margin: "5rem 0" }}>
      <Container>
        <div style={{ textAlign: "center" }}>
          <HeadingsComponent first="Related" last="Courses" />
        </div>
        <div>
          <CarouselComponent reviews={reviews} />
        </div>
      </Container>
    </div>
  );
};

export default RelatedCourses;
