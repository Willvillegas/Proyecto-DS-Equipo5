import React, { useState } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP
import { useAuthContext } from '../context/AuthContext';
import { saveAs } from 'file-saver';

const PopUp = ({ sedes, onClose }) => {
  const [selectedSede, setSelectedSede] = useState('');
  const { currentUser } = useAuthContext();
  const handleChange = (e) => {
    setSelectedSede(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Realizar la solicitud HTTP al servidor
      await axios.post(`${API_ROOT}/api/estudiantes/download`, {
          sede: currentUser.sede,
          modo: selectedSede === 'Todas' ? 0 : 1 // Determina el modo según la sede seleccionada

      } )
      .then((response) => {
        console.log(response.data.archivo)
        const uint8Array = new Uint8Array(response.data.archivo.data);

        // Crea un Blob a partir del Uint8Array
        const blob = new Blob([uint8Array], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        // Descarga el archivo utilizando FileSaver.js
        saveAs(blob, response.data.nombre);
      })
      
      onClose(); // Cierra el PopUp después de la descarga
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="relative bg-gray-800 rounded-lg p-8 max-w-md mx-auto">
          <button
            className="absolute top-0 right-0 p-2 text-gray-300"
            onClick={onClose}
          >
            X
          </button>
          <h2 className="text-xl mb-4 text-white">Selecciona una sede</h2>
          <select
            className="w-full mb-4 p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
            value={selectedSede}
            onChange={(e) => setSelectedSede(e.target.value)}
          >
            <option value="">Selecciona una sede</option>
            {sedes.map((sede, index) => (
              <option key={index} value={sede}>
                {sede}
              </option>
            ))}
          </select>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
};

const DescargaPopUp = () => {
  const { currentUser } = useAuthContext();
  const sedes = [currentUser.sede,'Todas'];
  const [showPopUp, setShowPopUp] = useState(true);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <div>
      {showPopUp && (
        <PopUp sedes={sedes} onClose={togglePopUp} />
      )}
    </div>
  );
};

export default DescargaPopUp;
