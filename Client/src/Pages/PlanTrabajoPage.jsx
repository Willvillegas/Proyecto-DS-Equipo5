import React, { useState, useEffect } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import PopupCrearPlan from '../components/PopupCrearPlan';
import PopupEliminarPlan from '../components/PopupElimiarPlan';

function PlanTrabajoPage() {
  const [PlanTrabajoInfo, setPlanTrabajoInfo] = useState([]);
  const [isOpenCrear, setIsOpenCrear] = useState(false);
  const [isOpenEliminar, setIsOpenEliminar] = useState(false);
  const [idPlan, setIdPlan] = useState(0);
  const [nombrePlan, setNombre] = useState('');
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(''); // Estado input busqueda
  const [systemDate, setSystemDate] = useState('');

  useEffect(() => {
    // Fetch system date
    const fetchServerTime = async () => {
      try {
        const response = await axios.get(`${API_ROOT}/api/server-time`);
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

    fetchServerTime();

    // Fetch Plan Trabajo data
    axios.get(`${API_ROOT}/api/planTrabajo`)
      .then(response => {
        setPlanTrabajoInfo(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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

  const clickVer = (id) => {
    navigate(`/actividad/${id}`)
  }
  const closePopupCrear = () => {
    setIsOpenCrear(false);
  }
  const openPopupCrear = () => {
    setIsOpenCrear(true);
  } 
  const closePopupEliminar= () => {
    setIsOpenEliminar(false);
  }
  const openPopupEliminar = (id, nombre) => {
    setIdPlan(id)
    setNombre(nombre)
    setIsOpenEliminar(true);
  } 

  const filteredPlanes = PlanTrabajoInfo.filter((plan) => {
    const nombreCompleto = `${plan.nombre}`.toLowerCase();
    const nombreMatches = nombreCompleto.includes(searchTerm.toLowerCase());
    return nombreMatches;
  });

  return (
    <div className="flex flex-1 flex-col justify-center lg:px-8 items-center min-h-screen">
    <div className=" w-full bg-gray-900 p-8 rounded-lg shadow-lg mx-auto mt-10 mb-10">
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Encabezado */}
      <header className="flex justify-between items-center px-4 py-3 ml-5">
        <div className="flex items-center">
          <div className="font-semibold text-3xl mt-5">Planes de trabajo</div>
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
      <div className="flex space-x-4">
      <label className="text-white mb-2 mt-2 ">Fecha del Sistema</label>
                  <input
                    type="date"
                    value={systemDate}
                    onChange={handleSystemDateChange}
                    className="bg-gray-700 text-white rounded-lg p-2"
                    style={{ colorScheme: "dark" }}
                  />
    </div>
      {currentUser.tipo != 4 ? <div/>:
      <div className="flex space-x-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-10"
        onClick={openPopupCrear}>
        Crear
      </button>
    </div>}
    </div>
      {/* Contenido */}
      <main className="p-4 h-[calc(100vh - 200px)] ml-2 overflow-y-auto overflow-x-hidden">
        {/* Tabla */}
        <div className="grid grid-cols-4 gap-1 mb-3 ml-3">
          <div>
          <span className="font-bold text-white">Año</span>
          </div>
          <div>
          <span className="font-bold text-white">Nombre</span>
          </div>
          <div >
          <span className="font-bold text-white ml-5">Acción</span>
          </div>
      </div>
        {filteredPlanes.map((planTrabajo)=>(
          <div key={planTrabajo.id}  className="bg-gray-700 rounded p-4 ml-2 mr-6 mt-3">
            <div className="grid grid-cols-4 gap-4">
              {/* Año */}
              <div>
                <p className="text-gray-300">{planTrabajo.generacion}</p>
              </div>
              {/* Nombre */}
              <div>
                <p className="text-gray-300">{planTrabajo.nombre}</p>
              </div>
              {/* Acción */}
              <div className='grid grid-cols-2 p-2 pl-5 w-[320px]'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-2"
                  onClick={() => clickVer(planTrabajo.id)}>
                  Ver
                </button>
                {currentUser.tipo != 4 ? <div/>:
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-10"
                  onClick={() =>openPopupEliminar(planTrabajo.id, planTrabajo.nombre)}>
                  Eliminar
                </button>}
              </div>
            </div>
          </div>
        ))}
      </main>
      <PopupCrearPlan isOpenC={isOpenCrear} 
                      close={closePopupCrear}
                      idEquipo={1} 
                />
      <PopupEliminarPlan isOpenE={isOpenEliminar} 
                      close={closePopupEliminar}
                      idPlan={idPlan}
                      nombre={nombrePlan}
                />
    </div>
    </div>
    </div>
  );
}

export default PlanTrabajoPage;
