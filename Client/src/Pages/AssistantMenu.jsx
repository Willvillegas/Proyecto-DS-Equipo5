import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const AssistantMenu = () => {
  const { currentUser } = useAuthContext();

  useEffect(() => {
    console.log(currentUser)
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-11">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl text-white font-bold mb-4 text-center">Menú</h2>
        {/* Botón para el Equipo guía */}
        <Link to="/equipo-guia">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
            Equipo guía
          </button>
        </Link>
        {/* Botón para Estudiantes */}
        <Link to="/estudiantes">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
            Estudiantes
          </button>
        </Link>
        {/* Botón para ir ventana para agregar estudiantes */}
        {currentUser.tipo in [1,2] ? 
        <Link to="/agregar-estudiantes">
        <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
          Agregar Estudiantes
        </button>
        </Link>:
        <></>}
        {/* Botón para ir al plan de trabajo */}
        <Link to="/plan-trabajo">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
            Plan de trabajo
          </button>
        </Link>

      </div>
    </div>
  );
};

export default AssistantMenu;

