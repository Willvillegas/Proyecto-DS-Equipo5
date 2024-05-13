import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const userType = 1;

const buttons = [
  {
    text: 'Volver',
    onClick: () => console.log("Volver"),
    roles: [1, 2, 3, 4, 5]
  },
  {
    text: 'Modificar',
    onClick: () => console.log('Modificar'),
    roles: [1, 2, 4]
  },
  {
    text: 'Eliminar',
    onClick: () => console.log('Eliminar'),
    roles: [1, 2]
  },
  {
    text: 'Cambiar rol',
    onClick: () => console.log('Cambiar rol'),
    roles: [1]
  }
];

const profileButtons = [
  {
    text: 'Subir foto de perfil',
    onClick: () => console.log('Subir foto de perfil'),
    roles: [1, 2, 4]
  }
];

const Button = ({ text, onClick, key }) => (
  <button
    className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-1 px-4 rounded mr-4 active:scale-[.98] active:duration-75 hover:scale-[1.01]"
    onClick={onClick}
    key={key}
  >
    {text}
  </button>
);

const ButtonGroup = ({ buttons, userType }) => (
  <div className="flex justify-center">
    {buttons.filter(button => button.roles.some(role => role === userType)).map((button, index) => (
      <Button key={index} text={button.text} onClick={button.onClick} />
    ))}
  </div>
);

const ProfileInfo = ({ profesorInfo }) => (
  <div className="mb-8">
    {/* Código */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Código:</p>
      <p className="text-white">{profesorInfo.codigo}</p>
    </div>
    {/* Nombre */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Nombre:</p>
      <p className="text-white">{profesorInfo.nombre}</p>
    </div>
    {/* Correo */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Correo:</p>
      <p className="text-white">{profesorInfo.correo}</p>
    </div>
    {/* Oficina */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Oficina:</p>
      <p className="text-white">{profesorInfo.oficina}</p>
    </div>
    {/* Celular */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Celular:</p>
      <p className="text-white">{profesorInfo.celular}</p>
    </div>
  </div>
);

function MostrarProfesorSede() {
  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  const [profesorInfo, setProfesorInfo] = useState({
    codigo: '',
    nombre: '',
    correo: '',
    oficina: '',
    celular: ''
  });

  useEffect(() => {
    // Simulación de datos de prueba
    const mockProfesorInfo = {
      codigo: 'AL-01',
      nombre: 'Esteban',
      correo: 'esteban@example.com',
      oficina: '0000-0000[extension 0000]',
      celular: '00000000'
    };

    setProfesorInfo(mockProfesorInfo);
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
        <div className="flex justify-center items-center flex-col mb-8">
          {/* Input de imagen */}
          <div className="border border-gray-400 w-36 h-36 rounded-full mb-4"></div>
          <ButtonGroup buttons={profileButtons} userType={userType} />
        </div>
        <ProfileInfo profesorInfo={profesorInfo} />
        {/* Botones */}
        <div className="flex justify-center">
          <ButtonGroup buttons={buttons.slice(1)} userType={userType} />
          <ButtonGroup buttons={[{ ...buttons[0], onClick: navigateBack }]} userType={userType} />
        </div>
      </div>
    </div>
  );
}

export default MostrarProfesorSede;