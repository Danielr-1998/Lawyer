import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whastapp.css"; // Importa el archivo CSS

const Whastapp = () => {
  return (
    <a
      href="https://wa.me/573206490156?text=¡Hola!%20Estoy%20interesado%20en%20un%20domicilio"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      title="Chatea con nosotros en WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default Whastapp;
