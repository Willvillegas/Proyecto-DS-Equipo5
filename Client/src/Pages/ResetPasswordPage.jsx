import React from 'react';

function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-11">
      {/* Contenedor interno con estilos Tailwind CSS */}
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-8">Cambiar contraseña</h1>
        <div className="mb-6">
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300" style={{ color: "gray-300" }}>
            Contraseña nueva</label>
          <input id="newPassword" type="password" className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300" style={{ color: "gray-300" }}>
            Confirmar contraseña</label>
          <input id="confirmPassword" type="password" className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <button className=" active:scale-[.98] active:duration-75 hover:scale-[1.01] bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
