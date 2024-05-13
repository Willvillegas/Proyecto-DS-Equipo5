import React, { useState, useEffect } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';

function EstudiantesPage() {
  const [EstudiantesInfo, setEstudianteInfo] = useState([]);
  const userType = 1 //Tipo de usuario (1 = Profesor)

  useEffect(() => {
    // Simulación de datos de prueba
    const mockData = [
      { id: 1, nombre: 'John Doe', correo: 'johndoe@estudiantec.cr', carnet: '2022437760' }
    ];

    // Establecer los datos de prueba en el estado
    setEstudianteInfo(mockData);
  }, []);

  /**
   *   useEffect(() => {
    axios.get(`${API_ROOT}/api/estudiante/${1}/estudiante`)
      .then(response => {
        setEstudianteInfo(response.data)
        console.log(EstudiantesInfo)
      })

  }, []);

   */

  return (
    <div className="flex flex-1 flex-col justify-center lg:px-8 items-center min-h-screen">
    <div className=" w-full bg-gray-900 p-8 rounded-lg shadow-lg mx-auto mt-10 mb-10">
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Encabezado */}
      <header className="flex justify-between items-center px-4 py-3 ml-5">
        <div className="flex items-center">
          <div className="font-semibold text-3xl mt-5">Estudiantes</div>
        </div>
      </header>
      <div className="flex items-center justify-between mb-4 ml-9">
      <div className="w-[400px]">
      <div className="flex items-center justify-between">
          <div className="relative w-full">
            <input
              type="text"
              className="block w-[400px] p-2 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <select
                  className="block p-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-1"
                  defaultValue="alfabetico"
                >
                  <option value="alfabetico">Alfabetico</option>
                </select>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2 active:scale-[.98] active:duration-75 hover:scale-[1.01]">
            Buscar
          </button>
        </div>
      </div>

      {userType == 1 ? <div/>:
<<<<<<< HEAD
      <div className="flex space-x-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-10 active:scale-[.98] active:duration-75 hover:scale-[1.01]">
=======
      <div className="flex space-x-4 mr-8">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
        Agregar
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-auto">
>>>>>>> 0d234cfb5be857812779952c115a1242aeabfdf4
        Cargar Excel
      </button>
    </div>
    }
    </div>
      {/* Contenido */}
      <main className="p-4 h-[500px] ml-2">
        {/* Tabla */}
        <div className="grid grid-cols-4 gap-1 mb-3 ml-3">
          <div>
          <span className="font-bold text-white">Nombre</span>
          </div>
          <div>
          <span className="font-bold text-white">Correo</span>
          </div>
          <div>
          <span className="font-bold text-white">Carnet</span>
          </div>
          <div >
          <span className="font-bold text-white ml-10">Acción</span>
          </div>
      </div>
        {EstudiantesInfo.map((estudiante)=>(
          <div key={estudiante.id}  className="bg-gray-700 rounded p-4 ml-2 mr-6 bg-gray-700 rounded p-4 ml-2 mr-6 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200">
            <div className="grid grid-cols-4 gap-4">
              {/* Nombre */}
              <div>
                <p className="text-gray-300">{estudiante.nombre}</p>
              </div>
              {/* Correo */}
              <div>
                <p className="text-gray-300">{estudiante.correo}</p>
              </div>
              {/* Carnet */}
              <div>
                <p className="text-gray-300">{estudiante.carnet}</p>
              </div>
              {/* Acción */}
              <div className='p-2 pl-10'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-2 active:scale-[.98] active:duration-75 hover:scale-[1.01]">
                  Ver
                </button>
<<<<<<< HEAD
                {userType == 1 ? <div/>:
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-10 active:scale-[.98] active:duration-75 hover:scale-[1.01]">
                  Agregar
                </button>}
=======
                
>>>>>>> 0d234cfb5be857812779952c115a1242aeabfdf4
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

export default EstudiantesPage;
