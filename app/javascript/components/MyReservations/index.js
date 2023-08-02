import React from 'react';

const MyReservations = ({}) => {
  const consultations = [
    {
      name: "Meet with D. A.K. Hasan",
      type: 'Online',
      location: 'Online',
      date: '2023-01-23',
    },
    {
      name: "Meet with D. A.K. Hasan",
      type: 'Online',
      location: 'Online',
      date: '2023-01-23',
    },
    {
      name: "Meet with D. A.K. Hasan",
      type: 'Inplace',
      location: 'City hall, down town, New York',
      date: '2023-01-23',
    },
    {
      name: "Meet with D. A.K. Hasan",
      type: 'Inplace',
      location: 'City hall, down town, New York',
      date: '2023-01-23',
    },
  ]
  return (
    <div className='consultation-container'>
      <ul className='list-container'>
        {consultations.map((c, index) => (
          <li className='list-item' key={index}>
            <h3 className='consultation-title'>{c.name}</h3>
            <span className='consultation-type'>
              <i class="fa-solid fa-house-medical"></i>
              {c.type}
            </span>
            <span className='consultation-date'>
              <i class="fa-solid fa-calendar-days"></i>
              {c.date}
            </span>
            <p className='consultation-location'>
              <i class="fa-solid fa-location-dot"></i>
              {c.location}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyReservations;