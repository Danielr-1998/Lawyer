import React, { useState, useEffect } from 'react';
import data from '../data.json';
import backgroundImage from '../assets/still-life-with-scales-justice.jpg'; // Asegúrate de tener la imagen en esta ruta

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    setAboutData(data.about_us);
  }, []);

  if (!aboutData) {
    return <div>Cargando información...</div>;
  }

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '110px 600px 300px 50px',
        textAlign: 'justify'
      }}
    >
      <h2 class="header-name">{aboutData.title}</h2>
      <p  class="header-experience">{aboutData.description}</p>
    </section>
  );
};

export default About;
