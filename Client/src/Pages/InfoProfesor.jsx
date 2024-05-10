import React, { useState, useEffect } from 'react';

function InfoProfesor() {
  // Paso 1: Crear un estado para almacenar la información del profesor
  const [profesorInfo, setProfesorInfo] = useState(null);

  // Paso 2: Hacer una solicitud al backend para obtener los datos
  useEffect(() => {
    // Simulación de solicitud al backend (reemplazar con la lógica real)
    // Aquí puedes hacer una solicitud HTTP utilizando fetch o Axios
    // Una vez que obtengas los datos, puedes actualizar el estado
    const fetchData = async () => {
      try {
        const response = await fetch('url_del_backend/profesor');
        const data = await response.json();
        setProfesorInfo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Se ejecutará solo una vez al montar el componente

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Encabezado */}
      <header className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <div className="font-semibold text-xl">Profesor</div>
        </div>
        <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded">
          Volver
        </button>
      </header>

      {/* Contenido */}
      <main className="p-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Subir foto de perfil */}
          <div className="bg-gray-700 rounded p-4 flex items-center">
            <span className="font-bold text-white">Subir foto de perfil</span>
          </div>

          {/* Información del profesor */}
          <div className="bg-gray-700 rounded p-4">
            <h2 className="text-lg font-semibold mb-4">Información del profesor</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Verificar si hay datos del profesor antes de mostrarlos */}
              {profesorInfo && (
                <>
                  {/* Código */}
                  <div>
                    <span className="font-bold text-white">Código:</span>
                    <p className="text-gray-300">{profesorInfo.codigo}</p>
                  </div>
                  {/* Nombre */}
                  <div>
                    <span className="font-bold text-white">Nombre:</span>
                    <p className="text-gray-300">{profesorInfo.nombre}</p>
                  </div>
                  {/* Correo */}
                  <div>
                    <span className="font-bold text-white">Correo:</span>
                    <p className="text-gray-300">{profesorInfo.correo}</p>
                  </div>
                  {/* Oficina */}
                  <div>
                    <span className="font-bold text-white">Oficina:</span>
                    <p className="text-gray-300">{profesorInfo.oficina}</p>
                  </div>
                  {/* Celular */}
                  <div>
                    <span className="font-bold text-white">Celular:</span>
                    <p className="text-gray-300">{profesorInfo.celular}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="p-4 bg-gray-700 text-center">
        {/* Contenido del pie de página */}
      </footer>
    </div>
  );
}

export default InfoProfesor;
