import { useState, useEffect } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import PopupArchivo from '../components/PopUpArchivo';
import { Link } from 'react-router-dom';

function AddEstudiantesPage() {
  const [estudiantesInfo, setEstudiantesInfo] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // Estado para mostrar/ocultar el popup
  const [searchTerm, setSearchTerm] = useState(''); // Estado input busqueda
  const [orderBy, setOrderBy] = useState('alfabetico'); //Orden estudiantes

  // Función para manejar la selección de archivo
  const handleFileSelect = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    axios
      .post(`${API_ROOT}/api/estudiantes/upload`, formData)
      .then((response) => {
        console.log('Archivo cargado exitosamente:', response.data.data);
        setEstudiantesInfo(response.data.data);
      })
      .catch((error) => {
        console.error('Error al cargar el archivo:', error);
      });

    // Cerrar el popup
    setShowPopup(false);
  };


// Filtrar estudiantes basados en el término de búsqueda en nombres y apellidos
const filteredEstudiantes = estudiantesInfo.filter((estudiante) => {
  const nombreCompleto = `${estudiante.nombre} ${estudiante.apellido1} ${estudiante.apellido2}`.toLowerCase();
  return nombreCompleto.includes(searchTerm.toLowerCase());
});


  const sortEstudiantes = () => {
    let sortedEstudiantes = [...estudiantesInfo];

    if (orderBy === 'alfabetico') {
      sortedEstudiantes.sort((a, b) => {
        if (typeof a.apellido1 === 'string' && typeof b.apellido1 === 'string') {
          return a.apellido1.localeCompare(b.apellido1);
        } else {
          return 0;
        }
      });
    } else if (orderBy === 'carnet') {
      sortedEstudiantes.sort((a, b) => {
        return a.carnet - b.carnet;
      });
    } 
    setEstudiantesInfo(sortedEstudiantes);
  };

  return (
    <div className="flex flex-1 flex-col justify-center lg:px-8 items-center min-h-screen">
      <div className=" w-full bg-gray-900 p-8 rounded-lg shadow-lg mx-auto mt-10 mb-10">
        <div className="min-h-screen bg-gray-800 text-white">
          {/* Encabezado */}
          <header className="flex justify-between items-center px-4 py-3 ml-5">
            <div className="flex items-center">
              <div className="font-semibold text-3xl mt-5">Agregar estudiantes</div>
            </div>
          </header>
          <div className="flex items-center justify-between mb-4 ml-9">
            <div className="w-[400px]">
              <div className="flex items-center justify-between">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="block w-[400px] p-2 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Buscar por nombre"
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
                <select
                  className="block p-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-1"
                  value={orderBy}
                  onChange={(e) => setOrderBy(e.target.value)}
                >
                  <option value="alfabetico">Alfabético</option>
                  <option value="carnet">Carnet</option>
                </select>
                <button
                  onClick={sortEstudiantes}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2 active:scale-[.98] active:duration-75 hover:scale-[1.01]"
                >
                  Ordenar
                </button>
              </div>
            </div>

              <div className="flex space-x-4 mr-8">
                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2 active:scale-[.98] active:duration-75 hover:scale-[1.01]"
                >
                  Cargar Excel
                </button>
                <Link to={`/estudiantes`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-auto">
                      Salir
                      </button>
                  </Link>
              </div>
          

           {' '}
            {showPopup && <PopupArchivo onFileSelect={handleFileSelect} />}{' '}
          </div>

          {/* Contenido */}
          <main className="p-4 h-[calc(100vh - 200px)] ml-2 overflow-y-auto overflow-x-hidden">
            
            {/* Tabla */}
            <div className="grid grid-cols-5 gap-1 mb-3 ml-3">
              {/* Encabezados de la tabla */}
              <div>
                <span className="font-bold text-white">Nombre</span>
              </div>
              <div>
                <span className="font-bold text-white">Apellidos</span>
              </div>
              <div>
                <span className="font-bold text-white">Carnet</span>
              </div>
              <div>
                <span className="font-bold text-white ml-10">Correo</span>
              </div>
              <div>
                <span className="font-bold text-white ml-10">Teléfono</span>
              </div>
            </div>
            {/* Contenido de la tabla */}
            {filteredEstudiantes.map((estudiante) => (
              <div
                key={estudiante.carnet}
                className="bg-gray-700 rounded p-4 ml-2 mr-6 mb-4 bg-gray-700 rounded p-4 ml-2 mr-6 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              >
                <div className="grid grid-cols-5 gap-4">
                  {/* Nombre */}
                  <div>
                    <p className="text-gray-300">{estudiante.nombre}</p>
                  </div>
                  {/* Apellidos */}
                  <div>
                    <p className="text-gray-300">{estudiante.apellido1} {estudiante.apellido2}</p>
                  </div>
                  {/* Carnet */}
                  <div>
                    <p className="text-gray-300">{estudiante.carnet}</p>
                  </div>
                  {/* Correo */}
                  <div>
                    <p className="text-gray-300">{estudiante.correo}</p>
                  </div>
                  {/* Teléfono */}
                  <div className="p-2 pl-10">
                    <p className="text-gray-300">{estudiante.telefono}</p>
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

export default AddEstudiantesPage;
