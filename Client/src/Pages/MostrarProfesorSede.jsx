import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_ROOT from '../../apiRoutes';

function MostrarProfesorSede() {
  const [profesorInfo, setProfesorInfo] = useState({
    codigo: '',
    nombre: '',
    correo: '',
    oficina: '',
    celular: ''
  });
  const userType = 1;

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

/** 
  useEffect(() => {
    // Lógica para obtener los datos del profesor del servidor
    axios.get(`${API_ROOT}/api/profesor`).then((response) => {
      setProfesorInfo(response.data);
    });
  }, []);*/

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
          <div className="mb-4 w-full">
            <p className="font-bold text-white">Celular:</p>
            <p className="text-white">{profesorInfo.celular}</p>
          </div>
        </div>
        {/* Botones */}
        <div className="mb-8 flex justify-center">
          {/* Botón de volver */}
          <button
            className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mr-4"
            onClick={() => console.log('Volver')}
          >
            Volver
          </button>
          {/* Botón de modificar */}
          <button
            className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mr-4"
            onClick={() => console.log('Modificar')}
          >
            Modificar
          </button>
          {/* Botón de eliminar */}
          <button
            className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mr-4"
            onClick={() => console.log('Eliminar')}
          >
            Eliminar
          </button>
          {/* Botón de cambiar rol */}
          <button
            className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
            onClick={() => console.log('Cambiar rol')}
          >
            Cambiar rol
          </button>
        </div>
      </div>
    </div>
  );
}

export default MostrarProfesorSede;
