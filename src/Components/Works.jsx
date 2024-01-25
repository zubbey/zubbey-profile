import React from "react";
import { Description } from "./Description";
export const Works = ({ works }) => {
  return (
    <section className="work-experience section" id="experience">
      <h2 className="section-title">WORK EXPERIENCE</h2>
      <div className="experience__container bd-grid">
        {works.map((work) => (
          <Work key={work.company} {...work} />
        ))}
      </div>
    </section>
  );
};

const Work = ({ title, period, company, desc, techused }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">{title}</h3>
        <span className="experience__company">
          {period} | {company}
        </span>
        <Description desc={desc}/>
        <span className="experience__company">Technologies used:</span>
        <div className="experience__techused-container">
        {techused.map(tech => <div className="experience__techused">{tech}</div>)}
        </div>
      </div>
    </div>
  );
};
