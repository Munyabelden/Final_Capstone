import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  // const { id } = useParams();
  // console.log(id);
  // const [Doctor, setDoctor] = useState({});
  // const params = useParams();

  // useEffect(() => {
  //   const getDoctor = async () => {
  //     const result = await fetch(`http://localhost:3030/Doctors/${params.id}`);
  //     const data = await result.json();

  //     setDoctor(data);
  //   };
  //   getDoctor();
  // }, []);

  const { id } = useParams(); 
  //console.log(id);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3030/doctors`)
      .then(response => response.json())
      .then(data => setDoctor(data));
  }, [id]);
  console.log(doctor);
  // const {  image, name, experience, rate, specialization, bio } = doctor;
  return (
    // <section>
    //   <div>
    //     <div>
    //       {/* <img src={image} alt={name} /> */}
    //     </div>

    //     <div>
    //       <h2>
    //         {/* {name} */}
    //         {doctor.name}
    //       </h2>

    //       <p>
    //         {/* {bio} */}
    //       </p>
    //       <span>
    //         {/* {experience} */}
    //       </span>
    //       <span>
    //         {/* {rate} */}
    //       </span>

    //       <div>
    //         <div>
    //           <a href="#">
    //             <span>Book Consultation</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div>
    {doctor ? (
      <section>
        <img src={doctor[0].image} />
        <div>
        <h2>NAME: {doctor[0].name}</h2>
        <p>PRICE: {doctor[0].rate}$</p>
        <p>BIO: {doctor[0].bio}</p>
        <p>SPECIALIZATION: {doctor[0].specialization}</p>
        <p>EXPERIENCE: {doctor[0].experience}</p>
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


