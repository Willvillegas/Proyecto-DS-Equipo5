import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext'; // Importa el contexto de autenticación

const buttons = [
  {
    text: 'Volver',
    onClick: () => console.log("Volver"),
    roles: [1, 2, 3, 4, 5] // 1 asistente Cartago, 2 asistente sede, 3 asistente sin sede, 4 profesor que está logueado, 5 profesor guía
  },
  {
    text: 'Modificar',
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

const ButtonGroup = ({ buttons, userType, navigateToModificar }) => (
  <div className="flex justify-center">
    {buttons.filter(button => button.roles.some(role => role === userType)).map((button, index) => (
      <Button key={index} text={button.text} onClick={button.onClick || navigateToModificar} />
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
      <p className="text-white">{profesorInfo.telOficina}</p>
    </div>
    {/* Celular */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Celular:</p>
      <p className="text-white">{profesorInfo.telPersonal}</p>
    </div>
  </div>
);

function MostrarProfesorSede() {
  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);
  const { id } = useParams();
  const { currentUser } = useAuthContext(); // Obtiene el usuario actual del contexto de autenticación
  const [profesorInfo, setProfesorInfo] = useState({});

  useEffect(() => {
    axios.get(`${API_ROOT}/api/profesores/${id}`)
      .then(response => {
        setProfesorInfo(response.data[0]);
      });
  }, []);

  

  useEffect(() => {
    // Obtener los datos reales del profesor desde el backend cuando se monta el componente
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_ROOT}/api/equiposguia/${1}/profesores`);
        const profesor = response.data[0]; // Suponiendo que solo necesitas el primer profesor de la lista
        setProfesorInfo(profesor);
      } catch (error) {
        console.error('Error al obtener los datos del profesor:', error);
      }
    };

    fetchData(); // Llama a la función para obtener los datos del profesor al montar el componente
  }, []);

  const navigateToModificar = () => {
    navigate(`/modificar-profesor/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
        <div className="flex justify-center items-center flex-col mb-8">
          {/* Input de imagen */}
          <div className="border border-gray-400 w-36 h-36 rounded-full mb-4"></div>
          <ButtonGroup buttons={profileButtons} userType={currentUser ? currentUser.tipo : 0} navigateToModificar={navigateToModificar} />
        </div>
        <ProfileInfo profesorInfo={profesorInfo} />
        {/* Botones */}
        <div className="flex justify-center">
          <ButtonGroup buttons={buttons.slice(1)} userType={currentUser ? currentUser.tipo : 0} navigateToModificar={navigateToModificar} />
          <ButtonGroup buttons={[{ ...buttons[0], onClick: navigateBack }]} userType={currentUser ? currentUser.tipo : 0} />
        </div>
      </div>
    </div>
  );
}

export default MostrarProfesorSede;

