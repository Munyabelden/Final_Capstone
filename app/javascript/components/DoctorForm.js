import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDoctors, addDoctor } from '../store/reducers/doctorSlice';

const DoctorForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'Dr. Mudasir Issah',
    specialization: 'Physician Assistant',
    bio: 'Dr with BSc. Physician Assistanship Ghana',
    image: '',
    experience: 2,
    rate: 15,
  });

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addDoctor(formData))
      .then(() => {
        navigate('/');
      });
  };

  return (
    <div className='cons-contianer'>
    <h2 className='title'>Add Doctor</h2>
    <form onSubmit={handleFormSubmit} className='consaltation-form'>
      <label htmlFor="name">Doctors name:</label>
      <input
        type="text"
        id="name"
        placeholder={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <label htmlFor="specialization">Specialization:</label>
      <input
        type="text"
        id="specialization"
        placeholder={formData.specialization}
        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
      />

      <label htmlFor="bio">Bio:</label>
      <input
        type="text"
        id="bio"
        placeholder={formData.bio}
        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
      />

      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        placeholder="Image URL"
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
      />

      <label htmlFor="experience">Experience:</label>
      <input
        type="text"
        id="experience"
        placeholder={formData.experience}
        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
      />

      <label htmlFor="rate">Rate ($):</label>
      <input
        type="number"
        id="rate"
        placeholder={formData.rate}
        onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
      />

      <input type="hidden" name="authenticity_token" value={csrfToken} />
      <button type="submit">Create Doctor</button>
    </form>
    </div>
  );
};

export default DoctorForm;