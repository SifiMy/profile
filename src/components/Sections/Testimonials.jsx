import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    id: 1,
    content:
      "I enjoy working with sifi. He is funy as much as a charming guy",
    authorImage: "images/customer-1.png",
    authorName: "Ada Uwais",
    authorStatus: "Eatslim Lifestyle",
  },
  {
    id: 2,
    content:
      "He worked with me in a freelancing project, I love his character and energy so much. Plus he deliver a very good job on a front end using angular.",
    authorImage: "images/customer-2.png",
    authorName: "Suhaimi",
    authorStatus: "Ans Solution",
  },
  {
    id: 3,
    content:
      "Startes as my client and than become the developer for a very sophisticated web application",
    authorImage: "images/customer-3.png",
    authorName: "Shahzar",
    authorStatus: "Apex",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonialsData.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
