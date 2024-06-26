import React, { useState, useEffect } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

function ActividadPage() {
  const [ActividadInfo, setActividadInfo] = useState([]);
  const { id } = useParams();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [systemDate, setSystemDate] = useState('');
 
  useEffect(() => {
    // Simulación de datos de prueba
    console.log(id)
    axios.get(`${API_ROOT}/api/actividades/${id}`)
      .then(response => {
        setActividadInfo(response.data)
      })
    // Establecer los datos de prueba en el estado
  }, [id]);

  // Obtener la fecha del servidor y establecerla como la fecha predeterminada
  useEffect(() => {
    axios.get(`${API_ROOT}/api/server-time`)
      .then(response => {
        console.log("Server time:", response.data)
        if (response.data) {
          const serverTime = response.data;
          setSystemDate(serverTime.split(' ')[0]); // Toma solo la parte de la fecha
        } else {
          console.error("serverTime is not defined in the response");
        }
      })
      .catch(error => {
        console.error("Error fetching server time:", error);
      });
  }, []);
  
  const clickVer = (id, idPlan) => {
    navigate(`/detalle-actividad/${id}`, { state: { idPlan: idPlan } })
  }
  const clickCrear = (idPlan) => {
    navigate(`/add-actividad`,{ state: { idPlan: idPlan } });
  }

  const handleSystemDateChange = (e) => {
    const newDate = e.target.value;
    setSystemDate(newDate);
    console.log("Nueva fecha:", newDate);

    // Enviar la nueva fecha al servidor
    axios.post(`${API_ROOT}/api/server-time`, { newTime: newDate + ' 00:00:00' })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error setting server time:", error);
      });
  };

  const filteredActividades = ActividadInfo.filter((actividad) => {
    const nombreCompleto = `${actividad.nombre}`.toLowerCase();
    const nombreMatches = nombreCompleto.includes(searchTerm.toLowerCase());
    return nombreMatches;
  });

  return (
    <div className="flex flex-1 flex-col justify-center lg:px-8 items-center min-h-screen ">
    <div className=" w-full bg-gray-900 p-8 rounded-lg shadow-lg mx-auto mt-10 mb-10 ">
    <div className="min-h-screen bg-gray-800 text-white ">
      {/* Encabezado */}
      <header className="flex justify-between items-center px-4 py-3 ml-5">
        <div className="flex items-center">
          <div className="font-semibold text-3xl mt-5">Actividades</div>
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2">
            Buscar
          </button>
        </div>
      </div>
      {/* TODO: CAMBIAR A 4 PARA PROFESOR COORDINADOR */}
      {currentUser.tipo === 4 && (
              <div className="flex flex-col items-center space-y-2 mr-10">
                <div className="flex space-x-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-10"
                    onClick={() => clickCrear(id)}>
                    Crear actividad
                  </button>
                  <label className="text-white mb-2 mt-2 ">Fecha del Sistema</label>
                  <input
                    type="date"
                    value={systemDate}
                    onChange={handleSystemDateChange}
                    className="bg-gray-700 text-white rounded-lg p-2"
                    style={{ colorScheme: "dark" }}
                  />
                </div>
              </div>
        )}
    </div>
      {/* Contenido */}
      <main className="p-4 h-[calc(100vh - 200px)] ml-2 overflow-y-auto overflow-x-hidden">
        {/* Tabla */}
        <div className="grid grid-cols-5 gap-1 mb-3 ml-3">
          <div>
          <span className="font-bold text-white">Semana</span>
          </div>
          <div>
          <span className="font-bold text-white">Nombre</span>
          </div>
          <div>
          <span className="font-bold text-white">Tipo</span>
          </div>
          <div >
          <span className="font-bold text-white">Estado</span>
          </div>
          <div >
          <span className="font-bold text-white ml-10">Acción</span>
          </div>
      </div>
        {filteredActividades.map((actividad)=>(
          <div key={actividad.id}  className="bg-gray-700 rounded p-4 ml-2 mr-9 mt-7 ">
            <div className="grid grid-cols-5 gap-4">
              {/* Semana */}
              <div>
                <p className="text-gray-300">{actividad.semana}</p>
              </div>
              {/* Nombre */}
              <div>
                <p className="text-gray-300">{actividad.nombre}</p>
              </div>
              {/* Tipo */}
              <div>
                <p className="text-gray-300">{actividad.tipo}</p>
              </div>
              {/* Estado */}
              <div>
                <p className="text-gray-300">{actividad.estado}</p>
              </div>
              {/* Acción */}
              <div className='flex items-center'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-2 ml-20"
                  onClick={() => clickVer(actividad.id, id)}>
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

export default ActividadPage;
