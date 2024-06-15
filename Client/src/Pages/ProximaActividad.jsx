import React, { useState, useEffect } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ProximaActividadPage() {
  const [ActividadInfo, setActividadInfo] = useState([]);
  const [systemDate, setSystemDate] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServerTime = async () => {
    // Obtener la fecha del servidor y establecerla como la fecha predeterminada
     await axios.get(`${API_ROOT}/api/server-time`)
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
    }
    /*Con "...actividades/0" obtiene todas las actividades sin importar su plan */
    const fetchActividades = async () => {
    await axios.get(`${API_ROOT}/api/actividades/0`)
    .then(response => {
      setActividadInfo(response.data)
      })
      .catch(error => {
        console.error("Error fetching activities:", error);
        });
    }
    fetchServerTime();
    fetchActividades();
      }, [id]);
      
  //Obtener actividad mas proxima segun fecha del servidor (modificable por el profesor coordinador)  
  const getProximaActividad = () => {
    const actividadesNotificadas = ActividadInfo.filter(actividad => 
      actividad.estado === 'Notificada' && new Date(actividad.fecha) >= new Date(systemDate));
    actividadesNotificadas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    return actividadesNotificadas[0];
  };

  const proximaActividad = getProximaActividad();

  return (
    <div className="flex flex-1 flex-col justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg mx-auto mt-10 mb-10">
        <div className="text-white">
          {/* Encabezado */}
          <header className="flex justify-between items-center px-4 py-3">
            <div className="flex items-center">
              <div className="font-semibold text-3xl">Próxima actividad</div>
            </div>
          </header>
          {/* Contenido */}
          <main className="p-4 overflow-y-auto overflow-x-hidden">
            {proximaActividad ? (
              <div className="bg-gray-900 rounded-lg p-4 shadow-md text-center">
                <h3 className="text-xl font-bold text-white mb-8">{proximaActividad.nombre}</h3>
                <p className="text-gray-300 mb-2"><strong>Semana:</strong> {proximaActividad.semana}</p>
                <hr className="border-t border-gray-300 my-2" />
                <p className="text-gray-300 mb-1"><strong>Fecha y hora:</strong> {proximaActividad.fecha}</p>
                <hr className="border-t border-gray-300 my-2" />
                <p className="text-gray-300 mb-1"><strong>Modalidad:</strong> {proximaActividad.modalidad}</p>
                <hr className="border-t border-gray-300 my-2" />
                <p className="text-gray-300 mb-1"><strong>Tipo:</strong> {proximaActividad.tipo}</p>
                <hr className="border-t border-gray-300 my-2" />
                <p className="text-gray-300 mb-2"><strong>Enlace:</strong> {proximaActividad.enlace}</p>
              </div>
            ) : (
              <p className="text-center text-gray-300">No hay próximas actividades.</p>
            )}
          </main>
          <button
            onClick={() => navigate('/menu')}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProximaActividadPage;
