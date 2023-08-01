import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DoctorCard = ({
  name, specialization, bio, image, experience, rate, id,
}) => {
  const rating = Math.round(rate * 10) / 10;

  return (
    <div>
      <Link
        to={{
          pathname: `/doctors/${id}`,
        }}
        className="singlecard"
      >
        <img src={image} alt={name} className="doctor-image" />
        <h4 className="bold-font doctor-name">{name}</h4>
        <p className="gray-font doctor-specialization">{specialization}</p>
        <hr className="dash" />
        <div className="doctor-rating-exp">
          <span className="bold-font gray-font">
            <i className="fa-sharp fa-solid fa-star-half-stroke" />
            {' '}
            {rating}
          </span>
          <span className="doctor-circle-splitter" />
          <span className="bold-font gray-font">
            {experience}
            years of experience
          </span>
        </div>
        <p className="gray-font doctor-bio">{bio}</p>
      </Link>
    </div>
  );
};

export default DoctorCard;

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
