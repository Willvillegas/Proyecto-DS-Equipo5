import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_ROOT from '../../apiRoutes';

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
  },
  {
    text: 'Eliminar',
    onClick: () => console.log('Eliminar'),
    roles: [1, 2] // Asistente Cartago 1, Asistente sede 2
  },
  {
    text: 'Cambiar rol',
    onClick: () => console.log('Cambiar rol'),
    roles: [1] // Asistente Cartago 1
  }
];

const Button = ({ text, onClick }) => (
  <button
    className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mr-4"
    onClick={onClick}
  >
    {text}
  </button>
);

function MostrarProfesorSede() {
  const [profesorInfo, setProfesorInfo] = useState({
    codigo: '',
    nombre: '',
    correo: '',
    oficina: '',
    celular: ''
  });
  const userType = 1; // PARÁMETRO QUE CAMBIA SEGÚN EL ROL PARA MOSTRAR LOS BOTONES

  useEffect(() => {
    // Simulación de datos de prueba
    const mockProfesorInfo = {
      codigo: 'AL-01',
      nombre: 'Esteban',
      correo: 'esteban@example.com',
      oficina: '0000-0000 [extension 0000]',
      celular: '00000000'
    };

    setProfesorInfo(mockProfesorInfo);
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
        <div className="flex justify-center items-center flex-col mb-8">
          {/* Input de imagen */}
          <div className="border border-gray-400 w-36 h-36 rounded-full mb-4"></div>
          {/* Subir foto de perfil */}
          <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
            Subir foto de perfil
          </button>
        </div>
        <div className="mb-8">
          {/* Código */}
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Código:</p>
            <p className="text-white">{profesorInfo.codigo}</p>
          </div>
          {/* Nombre */}
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Nombre:</p>
            <p className="text-white">{profesorInfo.nombre}</p>
          </div>
          {/* Correo */}
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Correo:</p>
            <p className="text-white">{profesorInfo.correo}</p>
          </div>
          {/* Oficina */}
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Oficina:</p>
            <p className="text-white">{profesorInfo.oficina}</p>
          </div>
          {/* Celular */}
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Celular:</p>
            <p className="text-white">{profesorInfo.celular}</p>
          </div>
        </div>
        {/* Botones */}
        <div className="flex justify-center">
          {buttons.map((button, index) => {
            // Verificar si el usuario tiene permiso para ver este botón
            if (button.roles.includes(userType)) {
              return (
                <Button
                  key={index}
                  text={button.text}
                  onClick={button.onClick}
                />
              );
            }
            return null; // Si el usuario no tiene permiso, no mostrar el botón
          })}
        </div>
      </div>
    </div>
  );
}

export default MostrarProfesorSede;
