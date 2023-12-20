import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Development",
    content: "If client can be clear of what do you want to achive. I can get it done",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Webucation",
    content: "Learn how to create a passive income form the internet",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Advertising",
    content: "Get your desire internet audience",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "SEO",
    content: "Discuss with me what term to use for the internet to find you",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "Template",
    content: "Choose your template from my template libraries or get a designer to design your template.",
    icon: "icon-note",
  },
  {
    id: 6,
    name: "Support",
    content: "For premium members get a day of my time for personel discussion or any that interest you.",
    icon: "icon-bubbles",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
