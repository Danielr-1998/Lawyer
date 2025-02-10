import React, { useState, useEffect } from 'react';
import data from '../data.json';
import './Header.css'; // Asegúrate de agregar el archivo CSS
import icon from '../assets/lawyer-svgrepo-com.svg'; // Importa el ícono desde assets

const Header = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    setHeaderData(data);
  }, []);

  if (!headerData) {
    return <div>Cargando...</div>;
  }

  return (
    <header className="header">
       <img src={icon} alt="Logo" className="header-icon" /><h1 className="header-name">{headerData.name}</h1>

      <p className="header-experience">{headerData.experience}</p>
      <nav className="header-nav">
        <ul>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
