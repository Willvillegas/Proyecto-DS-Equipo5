import React, { useState, useEffect } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';

function InfoProf() {
  const [EstudiantesInfo, setEstudianteInfo] = useState([]);
  const userType = 1 //Tipo de usuario (1 = Profesor)

  useEffect(() => {
    // Simulación de datos de prueba
    const mockData = [
      { id: 1,codigo: "AL-01", nombre: 'John Doe', correo: 'johndoe@estudiantec.cr', carnet: '2022437760', oficina: "0000 0000 [extension 0000]", telefono: "86453627"}
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
    <div className="flex flex-1 flex-col justify-center rounded-lg lg:px-6 items-center min-h-screen">
    <div className=" max-w-md w-full bg-gray-900 p-3 rounded-lg shadow-lg mx-auto">
    <div className="min-h-screen bg-gray-900  text-white">
      {/* Encabezado */}
      <header className="flex justify-between items-center px-4 py-6 ml-30">
        <div className="mt-8 text-center text-2xl font-bold leading-5 text-white">
        <div className="mt-2">
          <div className="mt-8 text-center text-2xl font-bold leading-5 text-white">Profesor</div>
        </div>
        </div>
      </header>
      <div className="flex items-center justify-between mb-4 ml-9">
      <div className="w-[400px]">
      <div className="flex items-center justify-between">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                
              </svg>
            </div>
          </div>
        </div>
      </div>
      {userType == 1 ? <div/>:
      <div className="flex space-x-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-10">
        Cargar Excel
      </button>
    </div>}
    </div>
      {/* Contenido */}
      <main className="p-2 h-[800px] ml-2">
        {/* Tabla */}
        <div className="grid grid-cols-2 gap-1 mb-3 ml-3">
          <div>
          <span className="font-bold text-white">Nombre</span>
          </div>
          <div>
          </div>
      </div >
      <div className="mt-6 border-t border-gray-100"> {/*Linea divisora.*/}
        <dl className="divide-y divide-gray-100">
          {EstudiantesInfo.map((estudiante)=>(
            <div key={estudiante.id} className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" >
              <dt className="text-sm font-medium leading-6 text-gray-50">{estudiante.id}</dt>
            
              <div className="grid grid-cols-4 gap-4">
                {/* Nombre */}
                <dd className="mt-1 text-sm leading-6 text-gray-50 sm:col-span-2 sm:mt-0">{estudiante.nombre}</dd>
                
                {/* Correo */}
                <dd className="mt-1 text-sm leading-6 text-gray-50 sm:col-span-2 sm:mt-0">{estudiante.correo}</dd>
                
                {/* Carnet */}
                <dd className="mt-1 text-sm leading-6 text-gray-50 sm:col-span-2 sm:mt-0">{estudiante.carnet}</dd>
                
                {/* Acción */}
                
              </div>
            </div>
          
          ))}
        </dl>
      </div>
      </main>

    </div>
    </div>
    </div>
  );
}

export default InfoProf;

