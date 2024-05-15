import React from 'react';

const ErrorMessage = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-gray-500 p-8 rounded shadow-lg">
        <p className="text-white-600 font-bold">{message}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Aceptar</button>
      </div>
    </div>
  );
};

export default ErrorMessage;
