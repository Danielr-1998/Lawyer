// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import './App.css'; // Puedes agregar tus estilos aquí

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Service />
      <Contact />
    </div>
  );
};

export default App;
