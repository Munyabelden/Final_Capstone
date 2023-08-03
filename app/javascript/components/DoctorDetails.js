import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {

  const [doctor, setDoctor] = useState({});
  const params = useParams();

  useEffect(() => {
    const getDoctor = async () => {
      const result = await fetch(`http://localhost:3000/doctors/${params.id}}`);
      const data = await result.json();
      console.log(data);
      setDoctor(data);
    };
    getDoctor();
  }, []);

  const { id, image, name, experience, rate, specialization, bio } = doctor;
  return (
    <div>
    {doctor ? (
      <section>
        <img src={image} />
        <div>
        <h2>NAME: {name}</h2>
        <p>PRICE: {rate}$</p>
        <p>BIO: {bio}</p>
        <p>SPECIALIZATION: {specialization}</p>
        <p>EXPERIENCE: {experience}</p>
        <button>Book Consultation</button>
        </div>
      </section>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
};

export default DoctorDetails;


