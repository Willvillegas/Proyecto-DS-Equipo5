import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_ROOT from '../../apiRoutes';

const userTipe = 1;

const buttons = [
  {
    text: 'Cancelar',
    onClick: () => console.log('Cancelar'),
    roles: [1, 2, 3, 4, 5] // Asistente Cartago 1, Asistente sede 2 , Asistente otra sede 3, Profesor logueado 4, Profesor otra sede 5
  },
  {
    text: 'Guardar',
    onClick: () => handleSaveClick(),
    roles: [1] // Asistente Cartago 1
  }
];

const Button = ({ text, onClick }) => (
  <button
    className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mr-4 active:scale-[.98] active:duration-75 hover:scale-[1.01]"
    onClick={onClick}
  >
    {text}
  </button>
);

const ButtonList = ({ buttons, userTipe }) => (
  <div className="flex justify-center">
    {buttons.map((button, index) => {
      if (button.roles.includes(userTipe)) {
        return <Button key={index} text={button.text} onClick={button.onClick} />;
      }
      return null;
    })}
  </div>
);

function ModificarEstudiante() {
  const [estudianteInfo, setEstudianteInfo] = useState({
    carnet: '201234567',
    nombre: 'Juan',
    correo: 'juan@example.com',
    telefono: '12345678'
  });
  const [showModal, setShowModal] = useState(false);
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  useEffect(() => {
    // Simulación de datos de prueba
  }, []);

  const handleSaveClick = () => {
    if (!validateInputs()) {
      setIsInvalidInput(true);
      return;
    }
    setShowModal(true);
  };

  const handleCancelClick = () => {
    console.log('Cancelar');
  };

  const handleConfirmClick = () => {
    console.log('Confirmar');
    setShowModal(false);
  };

  const handleCancelModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEstudianteInfo({ ...estudianteInfo, [name]: value });
  };

  const validateInputs = () => {
    for (const key in estudianteInfo) {
      if (!estudianteInfo[key]) {
        return false;
      }
    }
    return true;
  };

  const validateTelefono = (value) => {
    const regex = /^\d{8}$/;
    return regex.test(value);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
        <h1 className="font-semibold text-center text-3xl mt-5">Modificar estudiante</h1>
        <div className="mb-8">
          {/* Carnet */}
          <div className=" mt-6 mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Carnet:</p>
            <input
              className="w-full bg-gray-700 text-white p-2 rounded cursor-not-allowed"
              type="text"
              name="carnet"
              value={estudianteInfo.carnet}
              onChange={handleInputChange}
              disabled
            />
          </div>
          {/* Nombre */}
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Nombre:</p>
            <input
              className="w-full bg-gray-700 text-white p-2 rounded"
              type="text"
              name="nombre"
              value={estudianteInfo.nombre}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Correo */}
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Correo:</p>
            <input
              className="w-full bg-gray-700 text-white p-2 rounded"
              type="email"
              name="correo"
              value={estudianteInfo.correo}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Teléfono */}
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Teléfono:</p>
            <input
              className="w-full bg-gray-700 text-white p-2 rounded"
              type="tel"
              name="telefono"
              value={estudianteInfo.telefono}
              onChange={handleInputChange}
              required
              pattern={validateTelefono}
            />
          </div>
        </div>
        {/* Botones */}
        <ButtonList buttons={buttons} userTipe={userTipe} />
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded">
            <p className="text-lg font-bold mb-4">
              ¿Está seguro que desea realizar la modificación?
            </p>
            <div className="flex justify-end">
              <button
                className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded mr-4 active:scale-[.98] active:duration-75 hover:scale-[1.01]"
                onClick={handleCancelModal}
              >
                Cancelar
              </button>
              <button
                className="text-white bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded active:scale-[.98] active:duration-75 hover:scale-[1.01]"
                onClick={handleConfirmClick}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
      {isInvalidInput && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded">
            <p className="text-lg font-bold mb-4">
              Por favor, complete todos los campos obligatorios.
            </p>
            <button
              className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded active:scale-[.98] active:duration-75 hover:scale-[1.01]"
              onClick={() => setIsInvalidInput(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModificarEstudiante;

