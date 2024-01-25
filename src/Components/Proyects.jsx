import React from "react";
import { Description } from "./Description";

export const Proyects = ({ proyects }) => {
  return (
    <section className="proyects-experience section" id="proyects">
      <h2 className="section-title">LATEST JOBS</h2>
      <div className="experience__container bd-grid">
        {proyects.map((proyect) => (
          <Proyect key={proyect.company} {...proyect} />
        ))}
      </div>
    </section>
  );
};

const Proyect = ({ name, jobdesc, link }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">
          {name}
        </h3>
        <Description desc={jobdesc} />

        <a href={link} target="_blank" rel="noreferrer" className="social__link link__color">
          {link}
        </a>
      </div>
    </div>
  );
};
