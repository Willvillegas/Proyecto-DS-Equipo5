import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_ROOT from '../../apiRoutes';



const userTipe =1; // PARÁMETRO PARA CAMBIAR EL ROL Y MOSTRAR ASÍ LOS BOTONES

const buttons = [
  {
    text: 'Volver',
    onClick: () => console.log('Volver'),
    roles: [1, 2, 3, 4, 5] // Asistente Cartago 1, Asistente sede 2 , Asistente otra sede 3, Profesor logueado 4, Profesor otra sede 5
  },
  {
    text: 'Modificar',
    onClick: () => console.log('Modificar'),
    roles: [1, 2, 4] // Asistente Cartago 1, Asistente sede 2, Profesor logueado 4
  }
];


const Button = ({ text, onClick }) => (
  <button
    className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mr-4 active:scale-[.98] active:duration-75 hover:scale-[1.01]"
    onClick={onClick}
  >
    {text}
  </button>
);

const ButtonList = ({ buttons, userTipe }) => (
  <div className="flex justify-center">
    {buttons.map((button, index) => {
      if (button.roles.includes(userTipe)) {
        return <Button key={index} text={button.text} onClick={button.onClick} />;
      }
      return null;
    })}
  </div>
);

function MostrarEstudiante() {
  const [EstudianteInfo, setEstudianteInfo] = useState({
    carnet: '',
    nombre: '',
    correo: '',
    telefono: ''
  });
 

  useEffect(() => {
    // Simulación de datos de prueba
    const mockProfesorInfo = {
      carnet: '20022437760',
      nombre: 'Esteban',
      correo: 'esteban@example.com',
      telefono: '00000000'
    };

    setEstudianteInfo(mockProfesorInfo);
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
      <h1 className="text-white text-center text-3xl font-bold mb-4">Estudiante</h1>
        <div className="mb-8">
          {/* Carnet */}
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Carnet:</p>
            <p className="text-white">{EstudianteInfo.carnet}</p>
          </div>
          {/* Nombre */}
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Nombre:</p>
            <p className="text-white">{EstudianteInfo.nombre}</p>
          </div>
          {/* Correo */}
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Correo:</p>
            <p className="text-white">{EstudianteInfo.correo}</p>
          </div>
          {/* Telefono */}
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Telefono:</p>
            <p className="text-white">{EstudianteInfo.telefono}</p>
          </div>
        </div>
        {/* Botones */}
        <ButtonList buttons={buttons} userTipe={userTipe} />
      </div>
    </div>
  );
}

export default MostrarEstudiante;

