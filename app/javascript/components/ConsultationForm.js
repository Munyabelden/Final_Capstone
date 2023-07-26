import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createConsultation } from '../store/reducers/consultationReducer.js';

const ConsultationForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    user_id: 1,
    doctor_id: 2,
    duration: 60,
    city: 'New York',
    date: '2023-07-27',
    consultation_type: 'online',
  });

  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formDataWithToken = { ...formData, authenticity_token: csrfToken };
    dispatch(createConsultation(formData));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="user_id">User ID:</label>
      <input
        type="text"
        id="user_id"
        value={formData.user_id}
        onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
      />

      <label htmlFor="doctor_id">Doctor ID:</label>
      <input
        type="text"
        id="doctor_id"
        value={formData.doctor_id}
        onChange={(e) => setFormData({ ...formData, doctor_id: e.target.value })}
      />

      <label htmlFor="duration">Duration (minutes):</label>
      <input
        type="number"
        id="duration"
        value={formData.duration}
        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
      />

      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />

      <label htmlFor="date">Date:</label>
      <select
        id="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      >
        <option value="2023-07-27">July 27, 2023</option>
        <option value="2023-07-28">July 28, 2023</option>
        {/* Add more options as needed */}
      </select>

      <label htmlFor="type">Consultation Type:</label>
      <select
        id="type"
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
      >
        <option value="online">Online</option>
        <option value="in-person">In-person</option>
        {/* Add more options as needed */}
      </select>
      <input type="hidden" name="authenticity_token" value={csrfToken} />
      <button type="submit">Create Consultation</button>
    </form>
  );
};

export default ConsultationForm;
