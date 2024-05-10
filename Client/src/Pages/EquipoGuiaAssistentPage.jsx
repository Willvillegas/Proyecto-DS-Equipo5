import React from 'react';

function EquipoGuiaAssistentPage() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Encabezado */}
      <header className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <div className="font-semibold text-xl">Equipo guía primer ingreso X</div>
        </div>
      </header>

      {/* Contenido */}
      <main className="p-4">
        {/* Tabla */}
        <div className="bg-gray-700 rounded p-4">
          <div className="grid grid-cols-4 gap-4">
            {/* Código */}
            <div>
              <span className="font-bold text-white">Código:</span>
              <p className="text-gray-300">AL-01</p>
            </div>
            {/* Nombre */}
            <div>
              <span className="font-bold text-white">Nombre:</span>
              <p className="text-gray-300">Esteban Perez Picado</p>
            </div>
            {/* Correo */}
            <div>
              <span className="font-bold text-white">Correo:</span>
              <p className="text-gray-300">2021046572@estudiantec.cr</p>
            </div>
            {/* Acción */}
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ver
              </button>
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

export default EquipoGuiaAssistentPage;
