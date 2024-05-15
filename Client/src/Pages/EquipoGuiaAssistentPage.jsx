import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext'; // Importa el contexto de autenticación

function EquipoGuiaAssistentPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuthContext(); // Obtiene el usuario actual del contexto de autenticación
  const [profesorInfo, setProfesorInfo] = useState([]);

  const pasarPage = (id) => {
    navigate(`/mostrar-profesor/${id}`);
  };
 
  useEffect(() => {
    axios.get(`${API_ROOT}/api/equiposguia/${1}/profesores`)
      .then(response => {
        setProfesorInfo(response.data);
        console.log(profesorInfo);
      });
  }, []);

  const cliclRegistrar = () =>{
    navigate('/registrar-profesor')
  }

  return (
    <div className="flex flex-1 flex-col justify-center lg:px-8 items-center min-h-screen">
      <div className=" w-full bg-gray-900 p-8 rounded-lg shadow-lg mx-auto mt-10 mb-10">
        <div className="min-h-screen bg-gray-800 text-white">
          {/* Encabezado */}
          <header className="flex justify-between items-center px-4 py-3 ml-5">
            <div className="flex items-center">
              <div className="font-semibold text-3xl mt-5">Equipo guía primer ingreso 2024</div>
            </div>
          </header>
          <div className="flex items-center justify-between mb-4 ml-9">
            <div className="w-[400px]">
              <div className="flex items-center justify-between">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="block w-full p-2 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Buscar"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2 active:scale-[.98] active:duration-75 hover:scale-[1.01]">
                  Buscar
                </button>
              </div>
            </div>
            {currentUser && (currentUser.tipo === 1 || currentUser.tipo === 2) ? (
              <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-10 active:scale-[.98] active:duration-75 hover:scale-[1.01]"
                  onClick={cliclRegistrar}>
                  Registrar
                </button>
              </div>
            ) : null}
          </div>
          {/* Contenido */}
          <main className="p-4 h-[calc(100vh - 200px)] ml-2 overflow-y-auto overflow-x-hidden">
            {/* Tabla */}
            <div className="grid grid-cols-4 gap-1 mb-3 ml-3">
              <div>
                <span className="font-bold text-white">Código</span>
              </div>
              <div>
                <span className="font-bold text-white">Nombre</span>
              </div>
              <div>
                <span className="font-bold text-white">Correo</span>
              </div>
              <div>
                <span className="font-bold text-white ml-10">Acción</span>
              </div>
            </div>
            {profesorInfo.map((profesor) => (
              <div key={profesor.id} className="bg-gray-700 rounded p-4 ml-2 mr-6 bg-gray-700 rounded p-4 ml-2 mr-6 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200">
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-gray-300">{profesor.codigo}</p>
                  </div>
                  <div>
                    <p className="text-gray-300">{profesor.nombre}</p>
                  </div>
                  <div>
                    <p className="text-gray-300">{profesor.correo}</p>
                  </div>
                  <div className='p-2 pl-10'>
                    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded active:scale-[.98] active:duration-75 hover:scale-[1.01]" 
                      onClick={() => pasarPage(profesor.id)}>
                      Ver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

export default EquipoGuiaAssistentPage;


