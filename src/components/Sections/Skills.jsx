import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Skills are to be tested on usages overtime multiply by total knowledge . Below is percentage of how skillful I am on those technical stacks valued by individual expertise on those specific knowledge",
  progressData: [
    {
      id: 1,
      name: "Go-Lang",
      percentage: 95,
    },
    {
      id: 2,
      name: "ReactJs",
      percentage: 65,
    },
    {
      id: 3,
      name: "NodeJs",
      percentage: 80,
    },
    {
      id: 4,
      name: "Angular",
      percentage: 45,
    },
    {
      id: 1,
      name: "Laravel",
      percentage: 35,
    },
    {
      id: 2,
      name: "Wordpress",
      percentage: 25,
    },
    {
      id: 3,
      name: "Hardware",
      percentage: 90,
    },
    {
      id: 4,
      name: "Java",
      percentage: 45,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
