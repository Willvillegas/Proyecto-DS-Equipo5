import React from 'react';

// Componente para el rectángulo SVG
function RectangleSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 626 660"
      fill="none"
      style={{ width: '100%', height: '100%' }}
    >
      <use href="#svg-599846249_1012" />
    </svg>
  );
}

// Componente para el grupo de elementos
function Group() {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* Subir foto de perfil */}
      <p className="font-bold text-white text-center">Subir foto de perfil</p>
      {/* Aquí puedes agregar el botón para subir la foto */}
    </div>
  );
}

// Componente para la tabla
function Table() {
  return (
    <div className="flex flex-col items-center">
      {/* Código */}
      <p className="font-bold text-white">Código:</p>
      <p className="text-white">AL-01</p>
      {/* Nombre */}
      <p className="font-bold text-white">Nombre:</p>
      <p className="text-white">Esteban</p>
      {/* Correo */}
      <p className="font-bold text-white">Correo:</p>
      <p className="text-white">2021046572@estudiantec.cr</p>
      {/* Oficina */}
      <p className="font-bold text-white">Oficina:</p>
      <p className="text-white">0000-0000 [extension 0000]</p>
      {/* Celular */}
      <p className="font-bold text-white">Celular:</p>
      <p className="text-white">00000000</p>
    </div>
  );
}

// Componente para los botones
function Buttons() {
  return (
    <div className="flex space-x-4">
      {/* Botón de volver */}
      <button className="text-white" onClick={() => console.log('Volver')}>
        Volver
      </button>
      {/* Botón de modificar */}
      <button className="text-white" onClick={() => console.log('Modificar')}>
        Modificar
      </button>
      {/* Botón de eliminar */}
      <button className="text-white" onClick={() => console.log('Eliminar')}>
        Eliminar
      </button>
    </div>
  );
}

// Componente principal de la página
function MostrarProfesorSede() {
  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center">
      {/* Rectángulo SVG */}
      <RectangleSVG />
      {/* Grupo de elementos */}
      <div className="max-w-md w-full inset-0 flex justify-center items-center">
        <Group />
      </div>
      {/* Tabla */}
      <div className="max-w-md w-full inset-0 flex justify-center items-center">
        <Table />
      </div>
      {/* Botones */}
      <div className="max-w-md w-full bottom-0 left-0 right-0 mb-8 flex justify-center">
        <Buttons />
      </div>
    </div>
  );
}

export default MostrarProfesorSede;
