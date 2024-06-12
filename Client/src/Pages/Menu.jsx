import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Menu = () => {
  const { currentUser } = useAuthContext();
  currentUser.tipo = 5 // por el momento para probar que el usuario sea de tipo 5 (estudiante) solo comente esta línea si necesita que el menú
                       // aparezca según el usuario logueado
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-11">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl text-white font-bold mb-4 text-center">Menú</h2>
        {/* Botón para el Equipo guía */}
        {currentUser.tipo!== 5 && (
          <Link to="/equipo-guia">
            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
              Equipo guía
            </button>
          </Link>
        )}
        {/* Botón para Estudiantes */}
        {currentUser.tipo!== 5 && (
          <Link to="/estudiantes">
            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
              Estudiantes
            </button>
          </Link>
        )}
        {/* Botón para ir ventana para agregar estudiantes */}
        {currentUser.tipo == 1 || currentUser.tipo == 2? 
        <Link to="/agregar-estudiantes">
        <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
          Agregar Estudiantes
        </button>
        </Link>:
        <></>}
        {/* Botón para ir al plan de trabajo */}
        {currentUser.tipo!== 5 && (
          <Link to="/plan-trabajo">
            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
              Plan de trabajo
            </button>
          </Link>
        )}

        {/* Botones para usuario tipo 5 */}
        {currentUser.tipo == 5 && (
          <>
            <Link to="/cambiar-contrasena">
              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
                Cambiar contraseña
              </button>
            </Link>
            <Link to="/mi-perfil">
              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
                Mi perfil
              </button>
            </Link>
            <Link to="/calendario">
              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
                Calendario
              </button>
            </Link>
            <Link to="/proxima-actividad">
              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
                Próxima actividad
              </button>
            </Link>
            <Link to="/buzon">
              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4">
                Buzón
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;


