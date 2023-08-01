import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DoctorsCard = ({
  name, image, details, price, id,
}) => {
  const rating = Math.round((Math.random() * (5 - 4) + 4) * 10) / 10;

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
        <hr className="dash" />
        <div className="doctor-rating-price">
          <span className="bold-font gray-font">
            <i className="fa-sharp fa-solid fa-star-half-stroke" />
            {' '}
            {rating}
          </span>
          <span className="doctor-circle-splitter" />
          <span className="bold-font gray-font">
            <i className="fa-solid fa-dollar-sign" />
            {' '}
            {price}
          </span>
        </div>
        <p className="gray-font doctor-details">{details}</p>
      </Link>
    </div>
  );
};

export default DoctorsCard;

DoctorsCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
