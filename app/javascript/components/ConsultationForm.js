import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createConsultation } from '../store/reducers/consultationReducer';
import { fetchDoctors } from '../store/reducers/doctorSlice';

const ConsultationForm = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const currentUserData = useSelector((state) => state.auth.currentUser) || {};
  const doctor = useSelector((state) => state.doctors.doctor[params.doctor_id]) || {};
  const doctors = useSelector((state) => state.doctors.doctors);

  const [formData, setFormData] = useState({
    user_id: currentUserData.id,
    doctor_id: doctor.doctor_id,
    duration: 60,
    city: 'City',
    date: 'yyyy-mm-dd',
    consultation_type: 'online',
  });

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const selectedDoctor = doctors.find((doctor) => doctor.name === formData.doctor_id);

    const { user_id, duration, city, date, consultation_type } = formData;

    const consultationData = {
      user_id,
      doctor_id: selectedDoctor.id,
      duration,
      city,
      date,
      consultation_type,
    };

    dispatch(createConsultation(consultationData))
      .then(() => {
        navigate('/my-reservations');
      })
      .catch((error) => {
        error('Error creating consultation:', error);
      });
  };  

  return (
    <div className="cons-contianer">
      <h2 className="title">Book Consultation</h2>
      <form onSubmit={handleFormSubmit} className="consaltation-form">
        <input
          type="text"
          id="user_id"
          value={currentUserData.first_name}
          onChange={(e) => setFormData({ ...formData, user_id: currentUserData.id })}
          placeholder="Your name"
        />

        <input
          type="text"
          id="doctor_name"
          value={formData.doctor_id}
          onChange={(e) => setFormData({ ...formData, doctor_id: e.target.value })}
          placeholder="Doctor ID"
        />

        <input
          type="number"
          id="duration"
          value={doctor.name}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          placeholder="Duration in minutes"
        />

        <input
          type="text"
          id="city"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          placeholder="City"
        />

        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          placeholder="YYYY-MM-DD"
        />

        <select
          id="type"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="online">Online</option>
          <option value="in-person">In-person</option>
        </select>
        <input type="hidden" name="authenticity_token" value={csrfToken} />
        <button type="submit">Create Consultation</button>
      </form>
    </div>
  );
};

export default ConsultationForm;
