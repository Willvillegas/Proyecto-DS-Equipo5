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
  const [readStatus, setReadStatus] = useState({});
  const [filter, setFilter] = useState('todos');

  useEffect(() => {
    console.log(id);
    const fetchNotificaciones = async () => {
      // Datos de ejemplo
      const exampleData = [
        {
          id: 1,
          idEstudianteUsuario: 101,
          idActividad: 201,
          creacion: '2024-06-01T12:00:00Z',
          emisor: 'Profesor 1',
          contenido: 'Notificación sobre la actividad 1',
          idEstado: 1,
          visto: 0
        },
        {
          id: 2,
          idEstudianteUsuario: 102,
          idActividad: 202,
          creacion: '2024-06-02T13:00:00Z',
          emisor: 'Profesor 2',
          contenido: 'Notificación sobre la actividad 2',
          idEstado: 1,
          visto: 1
        }
      ];
      setNotificacionInfo(exampleData);

      // API
      // Se necesita recuperar las notificaciones con respecto a un estudiante (su id).....
      // await axios.get(`${API_ROOT}/api/estudiantes/notificaciones/${id}`)
      //   .then(response => {
      //     setNotificacionInfo(response.data);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    };
    fetchNotificaciones();
  }, [id]);

  const toggleReadStatus = (notificacionId) => {
    setReadStatus(prevStatus => ({
      ...prevStatus,
      [notificacionId]: !prevStatus[notificacionId]
    }));
    /**
     * Endpoint para marcar una notificación como leída (definir esta funcion como async )
     * await axios.put(`${API_ROOT}/api/estudiantes/notificaciones/${notificacionId}`)
     * .then(response => {
     * console.log(response.data);
     * })
     * .catch(error => {
     * console.log(error);
     * });
     * 
     */
  };

  const deleteNotificacion = (notificacionId) => {
    setNotificacionInfo(prevNotificaciones => prevNotificaciones.filter(notificacion => notificacion.id !== notificacionId));
    /**
     * Endpoint para eliminar una notificación (definir esta funcion como async )
     * await axios.delete(`${API_ROOT}/api/estudiantes/notificaciones/${notificacionId}/${id}`)
     * .then(response => {
     * console.log(response.data);
     * })
     * .catch(error => {
     * console.log(error);
     * });
     */
  };

  const filteredNotificaciones = NotificacionInfo.filter((notificacion) => {
    const contenido = `${notificacion.contenido}`.toLowerCase();
    const matchSearchTerm = contenido.includes(searchTerm.toLowerCase());
    const matchFilter = (filter === 'todos') ||
      (filter === 'leidos' && readStatus[notificacion.id]) ||
      (filter === 'noLeidos' && !readStatus[notificacion.id]);

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
                  <p className="text-gray-300 mb-1"><strong>Fecha:</strong> {new Date(notificacion.creacion).toLocaleString()}</p>
                  <p className="text-gray-300 mb-1"><strong>Contenido:</strong> {notificacion.contenido}</p>
                  <button
                    className={`absolute bottom-4 right-4 font-bold py-2 px-4 rounded ${readStatus[notificacion.id] ? 'bg-gray-500 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-gray-700 text-black'}`}
                    onClick={() => toggleReadStatus(notificacion.id)}
                  >
                    {readStatus[notificacion.id] ? 'Marcar como no leído' : 'Marcar como leído'}
                  </button>
                  {readStatus[notificacion.id] && (
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
