import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';

const userType = 5;

const buttons = [
  {
    text: 'Volver',
    onClick: () => console.log("Volver"),
    roles: [1, 2, 3, 4, 5] // 1 asistente Cartago, 2 asistente sede, 3 asistente sin sede, 4 profesor que está logueado, 5 profesor guía
  },
  {
    text: 'Modificar',
    roles: [5]
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

const ButtonGroup = ({ buttons, userType, navigateToModificar }) => (
  <div className="flex justify-center">
    {buttons.filter(button => button.roles.some(role => role === userType)).map((button, index) => (
      <Button key={index} text={button.text} onClick={button.onClick || navigateToModificar} />
    ))}
  </div>
);

const ProfileInfo = ({ profesorInfo: estudianteInfo }) => (
  <div className="mb-8">
    {/* Carnet */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Carnet:</p>
      <p className="text-white">{estudianteInfo.carnet}</p>
    </div>
    {/* Nombre */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Nombre:</p>
      <p className="text-white">{estudianteInfo.nombre}</p>
    </div>
    {/* Correo */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Correo:</p>
      <p className="text-white">{estudianteInfo.correo}</p>
    </div>
    {/* Telefono */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Telefono:</p>
      <p className="text-white">{estudianteInfo.telefono}</p>
    </div>
  </div>
);

function DetallesEstudiante() {
  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  const [EstudianteInfo, setEstudianteInfo] = useState({
    carnet: '',
    nombre: '',
    correo: '',
    telefono: ''
  });

  useEffect(() => {
    // Simulación de datos de prueba
    const mockEstudianteInfo = {
      carnet: 'AL-01',
      nombre: 'Esteban',
      correo: 'esteban@example.com',
      telefono: '00000000'
    };

    setEstudianteInfo(mockEstudianteInfo);
  }, []);

  const navigateToModificar = () => {
    
    navigate('/modificar-estudiante');
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
      <h1 className="text-white text-center text-3xl font-bold mb-4">Estudiante</h1>
        <div className="flex justify-center items-center flex-col mb-8">
          <ButtonGroup buttons={profileButtons} userType={userType} navigateToModificar={navigateToModificar} />
        </div>
        <ProfileInfo profesorInfo={EstudianteInfo} />
        {/* Botones */}
        <div className="flex justify-center">
          <ButtonGroup buttons={buttons.slice(1)} userType={userType} navigateToModificar={navigateToModificar} />
          <ButtonGroup buttons={[{ ...buttons[0], onClick: navigateBack }]} userType={userType} />
        </div>
      </div>
    </div>
  );
}

export default DetallesEstudiante;



