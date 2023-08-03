import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {

  const [doctor, setDoctor] = useState({});
  const params = useParams();

  useEffect(() => {
    const getDoctor = async () => {
      const result = await fetch(`http://localhost:3030/doctors/1`);
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
      <section className="bg-white dark:bg-gray-900 m-6 p-4">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div className="flex justify-center xl:w-1/2">
          <img
            className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md"
            src={image}
            alt={name}
          />
        </div>

        <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
            {specialization}
          </h2>

          <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
           {bio}
          </p>
          <span className="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
            {experience}
          </span>
          <span className="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
            {rate}
          </span>

          <div className="mt-6 sm:-mx-2">
            <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto"
              >
                <span className="mx-2">Book Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
};

export default DoctorDetails;


