import React from 'react';
import { GenerateCV } from './GenerateCV';
import { Options } from './Options';

export const Profile = ({
  name,
  ocupation,
  location,
  email,
  telephone,
  image,
  dob,
  isMobileView,
}) => {
  return (
    <section className='home' id='home'>
      <div className='home__container section bd-grid'>
        <div className='home__data bd-grid'>
          <img src={image} alt='profile_image' className='home__img' />
          <h1 className='home__title'>
            <strong>{name}</strong>
          </h1>
          <h3 className='home__profession'>{ocupation}</h3>
        </div>
        {/* {!isMobileView && <GenerateCV {...{ location, email, telephone, social }} />} */}
        <div className='home__address bd-grid'>
          <span className='home__information'>
          <i className='bx bx-calendar home__icon' /> {dob}

            </span>
          <span className='home__information'>
            <a href=" https://www.google.com/maps/place/Port+Harcourt,+Rivers/@4.8174104,7.0047966,12z/data=!3m1!4b1!4m6!3m5!1s0x1069cea39f2c48e3:0x53562bdd7d8832db!8m2!3d4.8472226!4d6.974604!16zL20vMDJqdHN5" target="_blank" rel="noreferrer" className="social__link">
              <i className='bx bx-map home__icon' /> {location}
            </a>
          </span>
          <span className='home__information'>
            <a href={`mail:${email}`} target="_blank" rel="noreferrer" className="social__link">
              <i className='bx bx-envelope home__icon' /> {email}
            </a>
          </span>
          <span className='home__information'>
          <a href={`tel:${telephone}`} target="_blank" rel="noreferrer" className="social__link">
              <i className='bx bx-phone home__icon' /> {telephone}
            </a>
          </span>
        </div>
      </div>
      <Options />
    </section>
  );
};