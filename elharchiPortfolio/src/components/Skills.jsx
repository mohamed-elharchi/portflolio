
import React from "react";
import { skills } from "../data";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage, icon: Icon }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              <CircularProgressbar
                value={percentage}
                // text={`${percentage}%`}
                strokeWidth={2}
                styles={buildStyles({
                  textColor: "var(--title-color)",
                  pathColor: "var(--first-color)",
                  trailColor: "var(--container-color)",
                })}
              />
              <div className="icon__overlay">
                <Icon />
              </div>
            </div>
            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
