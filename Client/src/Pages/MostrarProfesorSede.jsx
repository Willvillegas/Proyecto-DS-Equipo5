import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';
import PopupEliminarProfesor from '../components/PopupEliminarProfesor';
import PopupCambiarRol from '../components/PopupCambiarRol';

const buttons = [
  {
    text: 'Volver',
    onClick: () => console.log("Volver"),
    shouldShow: () => true // Mostrar siempre el botón Volver
  },
  {
    text: 'Modificar',
    shouldShow: (currentUser, profesorInfo) => (
      (currentUser.tipo === 1 || currentUser.tipo === 2) &&
      (currentUser.sede === profesorInfo.Sede) ||
      (currentUser.correo === profesorInfo.correo)
    )
  },
  {
    text: 'Eliminar',
    shouldShow: (currentUser, profesorInfo) => (
      (currentUser.tipo === 1 || currentUser.tipo === 2) &&
      (currentUser.sede === profesorInfo.Sede)
    )
  },
  {
    text: 'Cambiar rol',
    onClick: () => console.log('Cambiar rol'),
    shouldShow: (currentUser) => currentUser.tipo === 1
  },
  {
    text: 'Subir foto de perfil',
    onClick: () => console.log('Subir foto de perfil'),
    shouldShow: (currentUser, profesorInfo) => (
      (currentUser.tipo === 1 || currentUser.tipo === 2) &&
      (currentUser.sede === profesorInfo.Sede) ||
      (currentUser.correo === profesorInfo.correo)
    )
  },
];

const Button = ({ text, onClick }) => (
  <button
    className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-1 px-4 rounded mr-4 active:scale-[.98] active:duration-75 hover:scale-[1.01]"
    onClick={onClick}
  >
    {text}
  </button>
);

const ButtonGroup = ({ buttons, currentUser, profesorInfo, navigateToModificar, openDeletePopup, openChangeRolePopup }) => (
  <div className="flex justify-center">
    {buttons.filter((button) => button.shouldShow(currentUser, profesorInfo)).map((button, index) => (
      <Button
        key={index}
        text={button.text}
        onClick={
          button.text === 'Eliminar'
            ? openDeletePopup // Abrir el popup de eliminación
            : button.text === 'Cambiar rol'
            ? openChangeRolePopup // Abrir el popup de cambiar rol
            : button.onClick || navigateToModificar
        }
      />
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
  const navigateBack = () => navigate(`/equipo-guia`);
  const { id } = useParams();
  const { currentUser } = useAuthContext(); // Obtiene el usuario actual del contexto de autenticación
  const [profesorInfo, setProfesorInfo] = useState({});
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false); // Estado del popup de eliminación
  const [isChangeRolePopupOpen, setIsChangeRolePopupOpen] = useState(false); // Estado del popup de cambiar rol

  useEffect(() => {
    
    axios.get(`${API_ROOT}/api/profesores/${id}`)
      .then(response => {
        setProfesorInfo(response.data[0]);
      });
  }, [id]);

  console.log("ID del profesor:", id);

  const navigateToModificar = () => {
    navigate(`/modificar-profesor/${id}`);
  };

  const openDeletePopup = () => {
    setIsDeletePopupOpen(true);
  };

  const closeDeletePopup = () => {
    setIsDeletePopupOpen(false);
  };

  const openChangeRolePopup = () => {
    setIsChangeRolePopupOpen(true);
  };

  const closeChangeRolePopup = () => {
    setIsChangeRolePopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
        <div className="flex justify-center items-center flex-col mb-8">
          {/* Input de imagen */}
          <div className="border border-gray-400 w-36 h-36 rounded-full mb-4"></div>
          {/* Botón Subir foto de perfil */}
          <ButtonGroup buttons={[buttons[4]]} currentUser={currentUser} profesorInfo={profesorInfo} />
        </div>
        <ProfileInfo profesorInfo={profesorInfo} />
        {/* Botones */}
        <div className="flex justify-center">
          <ButtonGroup
            buttons={buttons.slice(1, 4)}
            currentUser={currentUser}
            profesorInfo={profesorInfo}
            navigateToModificar={navigateToModificar}
            openDeletePopup={openDeletePopup} // Pasar la función para abrir el popup de eliminación
            openChangeRolePopup={openChangeRolePopup} // Pasar la función para abrir el popup de cambiar rol
          />
          <ButtonGroup buttons={[{ ...buttons[0], onClick: navigateBack }]} currentUser={currentUser} />
        </div>
      </div>
      <PopupEliminarProfesor
        isOpenE={isDeletePopupOpen}
        close={closeDeletePopup}
        idProfesor={id}
        nombre={profesorInfo.nombre}
        idAsistente={currentUser.id}
      />
      <PopupCambiarRol
        isOpenC={isChangeRolePopupOpen}
        close={closeChangeRolePopup}
        idProfesor={id}
        idAsistente={currentUser.id}
      />
    </div>
  );
}

export default MostrarProfesorSede;
