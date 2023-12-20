import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "Present",
    degree: "Freelancing",
    content:
      "Currently developing on an auto bot for traders, an ecommerce template for food company and a lot more.",
  },
  {
    id: 2,
    year: "2023 - August 2023",
    degree: "Regov - Kenanga",
    content:
      "After a lot of Back-end, front-end and scripting, its time for a new field. My first career involving Investment Projects.",
  },
  {
    id: 3,
    year: "2018 - Dec 2022",
    degree: "Isistech - Petronas",
    content:
      "Love working with petronas. If I were an excelent player of politics, I might have landed on management position.",
  },
  {
    id: 4,
    year: "2017 - 2018",
    degree: "Theta Edge - Tabung Haji",
    content:
      "Starting my first Back end stuff with Java.",
  },
  {
    id: 5,
    year: "2010 - 2017",
    degree: "Plus Bhd - TMC",
    content:
      "The best career to start with. An all rounded company",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
