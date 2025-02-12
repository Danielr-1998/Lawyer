import React, { useState, useEffect } from 'react';
import data from '../data.json';
import backgroundImage from '../assets/still-life-with-scales-justice.jpg';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [styles, setStyles] = useState({});

  useEffect(() => {
    setAboutData(data.about_us);
  }, []);

  useEffect(() => {
    const updateStyles = () => {
      const width = window.innerWidth;

      if (width > 1024) {
        // Pantallas grandes (PC)
        setStyles({
          padding: '110px 600px 300px 50px',
          textAlign: 'justify',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'unset',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '90% center',
          color: 'white',
        });
      } else if (width > 768) {
        // Tablets
        setStyles({
          padding: '80px 100px 150px 30px',
          textAlign: 'justify',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
        });
      } else {
        // Móviles
        setStyles({
          padding: '0px 20px',
          textAlign: 'center',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain', // Hace la imagen más pequeña
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
        });
      }
    };

    updateStyles();
    window.addEventListener('resize', updateStyles);
    return () => window.removeEventListener('resize', updateStyles);
  }, []);

  if (!aboutData) {
    return <div>Cargando información...</div>;
  }

  return (
    <section style={styles} id="about">
      <h2 className="header-name">{aboutData.title}</h2>
      <p className="header-experience-about">{aboutData.description}</p>
    </section>
  );
};

export default About;
