import React, { useState, useEffect } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

function CalendarioPage() {
  const [ActividadInfo, setActividadInfo] = useState([]);
  const { id } = useParams();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
 
  useEffect(() => {
    console.log(id)
    const fetchActividades = async () => {
      /**Con "...actividades/0" obtiene todas las actividades sin importar su plan */
      await axios.get(`${API_ROOT}/api/actividades/0`)
        .then(response => {
          setActividadInfo(response.data)
        })
        .catch(error => {
          console.log(error)
        });
      }
    fetchActividades();
  }, [id]);

  const filteredActividades = ActividadInfo.filter((actividad) => {
    const nombreCompleto = `${actividad.nombre}`.toLowerCase();
    return nombreCompleto.includes(searchTerm.toLowerCase()) && actividad.estado === 'Notificada';
  });

  return (
    <div className="flex flex-1 flex-col justify-center lg:px-8 items-center min-h-screen">
      <div className="w-full bg-gray-900 p-8 rounded-lg shadow-lg mx-auto mt-10 mb-10">
        <div className="min-h-screen bg-gray-800 text-white">
          {/* Encabezado */}
          <header className="flex justify-between items-center px-4 py-3 ml-5">
            <div className="flex items-center">
              <div className="font-semibold text-3xl mt-5 mb-4">Calendario</div>
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
          </div>
          {/* Contenido */}
          <main className="p-4 h-[calc(100vh - 200px)] ml-2 overflow-y-auto overflow-x-hidden">
            {/* Cuadros de actividades */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActividades.map((actividad) => (
                <div key={actividad.id} className="bg-gray-900 rounded-lg p-4 shadow-md text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{actividad.nombre}</h3>
                  <p className="text-gray-300 mb-1"><strong>Fecha:</strong> {actividad.fecha}</p>
                  <p className="text-gray-300 mb-1"><strong>Modalidad:</strong> {actividad.modalidad}</p>
                  <p className="text-gray-300 mb-1"><strong>Tipo:</strong> {actividad.tipo}</p>
                  <p className="text-gray-300 mb-2"><strong>Enlace:</strong> {actividad.enlace}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CalendarioPage;
