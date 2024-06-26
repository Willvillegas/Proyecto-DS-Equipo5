import React, { useState, useEffect } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

function BuzonPage() {
  const [NotificacionInfo, setNotificacionInfo] = useState([]);
  const { id } = useParams();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('todos');
  const [systemDate, setSystemDate] = useState('');

  useEffect(() => {
    const fetchServerTime = async () => {
      try {
        const response = await axios.get(`${API_ROOT}/api/server-time`);
        console.log("Server time:", response.data);
        if (response.data) {
          const serverTime = response.data;
          setSystemDate(serverTime.split(' ')[0]); // Toma solo la parte de la fecha
        } else {
          console.error("serverTime is not defined in the response");
        }
      } catch (error) {
        console.error("Error fetching server time:", error);
      }
    };

    const fetchNotificaciones = async () => {
      try {
        console.log(`notificacion ${currentUser.id}`)
        const response = await axios.get(`${API_ROOT}/api/estudiantes/notificaciones/${currentUser.id}`, {
          params: { fecha: systemDate }
        });
        setNotificacionInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchServerTime();
    fetchNotificaciones();
  }, [id, systemDate]);

  const toggleReadStatus = async (notificacionId, currentStatus) => {
    const newStatus = currentStatus === 1 ? 2 : 1;
    setNotificacionInfo(prevNotificaciones =>
      prevNotificaciones.map(notificacion =>
        notificacion.id === notificacionId ? { ...notificacion, visto: newStatus } : notificacion
      )
    );
    try {
      await axios.put(`${API_ROOT}/api/estudiantes/notificaciones/${notificacionId}`);
      console.log("Notificación actualizada");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNotificacion = async (notificacionId) => {
    setNotificacionInfo(prevNotificaciones => prevNotificaciones.filter(notificacion => notificacion.id !== notificacionId));
    
    try {
      await axios.delete(`${API_ROOT}/api/estudiantes/notificaciones/${notificacionId}`);
      console.log("Notificación eliminada");
    } catch (error) {
      console.log(error);
    }
  };

  const filteredNotificaciones = NotificacionInfo.filter((notificacion) => {
    const contenido = `${notificacion.contenido}`.toLowerCase();
    const matchSearchTerm = contenido.includes(searchTerm.toLowerCase());
    const matchFilter = (filter === 'todos') ||
      (filter === 'leidos' && notificacion.visto === 2) ||
      (filter === 'noLeidos' && notificacion.visto === 1);

    return matchSearchTerm && matchFilter;
  }).sort((a, b) => new Date(b.creacion) - new Date(a.creacion));

  return (
    <div className="flex flex-1 flex-col justify-center lg:px-8 items-center min-h-screen">
      <div className="w-full bg-gray-900 p-8 rounded-lg shadow-lg mx-auto mt-10 mb-10">
        <div className="min-h-screen bg-gray-800 text-white">
          {/* Encabezado */}
          <header className="px-4 py-3 text-center">
            <div className="font-semibold text-4xl mt-5 mb-4">Buzón</div>
          </header>
          {/* Filtro */}
          <div className="flex justify-start mb-4 px-8 ml-4 mr-4">
            <select
              className="bg-gray-700 text-white p-2 rounded"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="leidos">Leídos</option>
              <option value="noLeidos">No Leídos</option>
            </select>
          </div>
          {/* Contenido */}
          <main className="p-4 h-[calc(100vh - 200px)] overflow-y-auto overflow-x-hidden">
            {/* Cuadros de notificaciones */}
            <div className="grid grid-cols-1 gap-6">
              {filteredNotificaciones.map((notificacion) => (
                <div key={notificacion.id} className="bg-gray-900 rounded-lg p-4 shadow-md w-full relative">
                  <h3 className="text-xl font-bold text-white mb-2">{notificacion.emisor}</h3>
                  <p className="text-gray-300 mb-1"><strong>Fecha:</strong> {new Date(notificacion.creacion).toLocaleString().slice(0, 9)}</p>
                  <p className="text-gray-300 mb-1"><strong>Contenido:</strong> {notificacion.contenido}</p>
                  {notificacion.contenido.includes("recordatorio") ? 
                    <p className="text-gray-300 mb-1"><strong>Fecha recordatorio:</strong> {new Date(notificacion.creacion).toLocaleString().slice(0, 9)}</p>:
                    <></>}
                  <button
                    className={`absolute bottom-4 right-4 font-bold py-2 px-4 rounded ${notificacion.visto === 2 ? 'bg-gray-500 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-gray-700 text-black'}`}
                    onClick={() => toggleReadStatus(notificacion.id, notificacion.visto)}
                  >
                    {notificacion.visto === 2 ? 'Marcar como no leído' : 'Marcar como leído'}
                  </button>
                  {notificacion.visto === 2 && (
                    <button
                      className="absolute top-4 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => deleteNotificacion(notificacion.id)}
                    >
                      Eliminar
                    </button>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default BuzonPage;
