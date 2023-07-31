import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const [Doctor, setDoctor] = useState({});
  const params = useParams();

  useEffect(() => {
    const getDoctor = async () => {
      const result = await fetch(`http://localhost:3030/Doctors/${params.id}`);
      const data = await result.json();

      setDoctor(data);
    };
    getDoctor();
  }, []);
  const { id, image, name, experience, rate, specialization, bio } = Doctor;
  return (
    <section>
      <div>
        <div>
          <img src={image} alt={name} />
        </div>

        <div>
          <h2>
            {name}
          </h2>

          <p>
            {bio}
          </p>
          <span>
            {experience}
          </span>
          <span>
            {rate}
          </span>

          <div>
            <div>
              <a href="#">
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;


