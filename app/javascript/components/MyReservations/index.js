import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchConsultations } from '../../store/reducers/consultationReducer';

const MyReservations = () => {
  const dispatch = useDispatch();
  const currentUserData = useSelector((state) => state.auth.currentUser);
  const consultations = useSelector((state) => state.consultation.consultations);
  const isLoading = useSelector((state) => state.consultation.isLoading);

  useEffect(() => {
    dispatch(fetchConsultations());
  }, [dispatch]);

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  const userConsultations = consultations.filter((c) => c.user_id === currentUserData.id);

  return (
    <div className='consultation-container'>
      <ul className='list-container'>
        {userConsultations.map((c, index) => (
          <li className='list-item' key={index}>
            <h3 className='s-title'>{c.duration}minutes</h3>
            <span className='consultation-type'>
              <i className="fa-solid fa-house-medical"></i>
              {c.consultation_type}
            </span>
            <span className='consultation-date'>
              <i className="fa-solid fa-calendar-days"></i>
              {c.date}
            </span>
            <p className='consultation-location'>
              <i className="fa-solid fa-location-dot"></i>
              {c.city}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyReservations;
