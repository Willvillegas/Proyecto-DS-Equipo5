import { useState } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { saveAs } from 'file-saver';

const PopUpDescargarArchivo = ({ sedes, onClose, sede, modo }) => {
  const [selectedSede, setSelectedSede] = useState('');

  const handleChange = (e) => {
    setSelectedSede(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API_ROOT}/api/estudiantes/download`, {
        sede: selectedSede,
        //Modo de descarga
        modo: selectedSede === 'Todas' ? 1 : 0
      });
       //Convertir el contenido del archivo a un Uint8Array
      const uint8Array = new Uint8Array(response.data.archivo.data);
      const blob = new Blob([uint8Array], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, response.data.nombre);

      onClose();
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
          <button className="absolute top-0 right-0 p-2 text-gray-300" onClick={onClose}>
            X
          </button>
          <h2 className="text-xl mb-4 text-white">Selecciona una sede</h2>
          <select
            className="w-full mb-4 p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
            value={selectedSede}
            onChange={handleChange}
          >
            <option value="">Selecciona una sede</option>
            {sedes.map((sede, index) => (
              <option key={index} value={sede}>
                {sede}
              </option>
            ))}
          </select>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpDescargarArchivo;
