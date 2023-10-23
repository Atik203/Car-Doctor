import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-8 lg:mt-3">
      <div className="space-y-3">
        <h1 className="text-red-500 text-center font-bold">Services</h1>
        <h1 className="text-4xl text-center font-bold">Our Service Area</h1>
        <p className="text-center max-w-lg mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        {services?.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
