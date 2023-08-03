import React, { useState, useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';

const DoctorForm = () => {
  const dispatch = useDispatch();
  const currentUserData = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: 'Dr. Mudasir Issah',
    specialization: 'Physician Assistant',
    bio: 'Dr with BSc. Physician Assistanship Ghana',
    image: '',
    experience: 2,
    rate: 15,
  });

  // useEffect(() => {
  //   if (currentUserData.user_firstname) {
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       user_: currentUserData.user_firstname,
  //     }));
  //   }
  // }, [currentUserData.user_firstname]);

  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formDataWithToken = { ...formData, authenticity_token: csrfToken };
    
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