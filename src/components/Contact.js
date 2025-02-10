import React, { useState, useEffect } from 'react';
import data from '../data.json';
import './Contact.css'; // Asegúrate de crear el archivo CSS

const Contact = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    setContactData(data.contact);
  }, []);

  if (!contactData) {
    return <div>Cargando información de contacto...</div>;
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Información de contacto */}
        <div className="contact-info">
          <h2 className="contact-title">Contacto</h2>
          <div className="contact-details">
            <p><strong>Email:</strong> {contactData.email}</p>
            <p><strong>Teléfono:</strong> {contactData.phone}</p>
            <p><strong>Dirección:</strong> {contactData.address}</p>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Contact;
