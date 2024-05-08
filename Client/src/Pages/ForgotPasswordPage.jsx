import React from 'react';

function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-white text-2xl font-bold mb-4">Olvidó su contraseña?</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Correo electrónico</label>
          <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <button type="submit" className=" active:scale-[.98] active:duration-75 hover:scale-[1.01] w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Recuperar
        </button>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
