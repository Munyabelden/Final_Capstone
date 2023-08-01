import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DoctorCard from './DoctorCard';
import { fetchDoctors } from '../../redux/DoctorsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="home col-md col">
      <h1 className="bold-font homepage-heading">
        OUR DOCTORS
      </h1>
      <p className="gray-font">
        Please select a doctor for an appointment
      </p>
      <hr className="dash home-dash" />
      <div className="carousel-container col-12">
        <Swiper
          className="doctor-list col-10"
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={isMobile ? 1 : 3}
          navigation
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <DoctorCard
                name={doctor.name}
                specialization={doctor.specialization}
                bio={doctor.bio}
                image={doctor.image}
                experience={doctor.experience}
                rate={doctor.rate}
                id={doctor.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
