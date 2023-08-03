import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConsultations } from '../../store/reducers/consultationReducer';

const MyReservations = ({}) => {
  const dispatch = useDispatch()
  const { consultations } = useSelector((state) => state.consultation)


  useEffect(() => {
    dispatch(fetchConsultations)
  }, [dispatch])

  return (
    <div className='consultation-container'>
      <ul className='list-container'>
        {consultations.map((c, index) => (
          <li className='list-item' key={index}>
            <h3 className='s-title'>{c.name}</h3>
            <span className='consultation-type'>
              <i class="fa-solid fa-house-medical"></i>
              {c.consultation_type}
            </span>
            <span className='consultation-date'>
              <i class="fa-solid fa-calendar-days"></i>
              {c.date}
            </span>
            <p className='consultation-location'>
              <i class="fa-solid fa-location-dot"></i>
              {c.city}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyReservations;