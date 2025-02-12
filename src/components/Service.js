// src/components/Service.js
import React, { useState, useEffect } from 'react';
import data from '../data.json';

const Service = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    setServicesData(data.services);
  }, []);

  if (!servicesData) {
    return <div>Cargando servicios...</div>;
  }

  return (
    <section id="services">
      <div className="services">
        {servicesData.map((service, index) => (
          <div key={index} className="service">
            <h3>{service.icon} {service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
