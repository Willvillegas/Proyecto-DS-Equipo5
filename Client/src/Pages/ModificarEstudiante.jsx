
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_ROOT from '../../apiRoutes';
import ErrorMessage from '../components/ErrorMessage'; //PopUpError
import { useAuthContext } from '../context/AuthContext'; // Importa el contexto de autenticación

const sedeOptions = ['Cartago', 'Limon', 'San Carlos', 'Alajuela', 'San Jose'];

const userTypeButtons = [
  {
    text: 'Volver',
    onClick: () => console.log("Volver"),
    roles: [1, 2, 3, 4, 5] // 1 asistente Cartago, 2 asistente sede, 3 asistente sin sede, 4 profesor que está logueado, 5 profesor guía
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

function ModificarEstudiante() {
  const { id } = useParams();
  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);
  const [estudianteInfo, setEstudianteInfo] = useState([]);
  const [modifiedEstudianteInfo, setModifiedEstudianteInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useAuthContext(); // Obtén el usuario actual del contexto de autenticación
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    axios.get(`${API_ROOT}/api/estudiantes/${id}`)
     .then(response => {
        setEstudianteInfo(response.data[0]);
        setModifiedEstudianteInfo(response.data[0]);
      })
     .catch(error => {
        console.error('Error al obtener la información del estudiante:', error);
      });
  }, []);

  const handleSaveChanges = () => {
    if (modifiedEstudianteInfo.telefono && modifiedEstudianteInfo.telefono.length!== 8) {
      console.log('El número de teléfono debe tener 8 dígitos.');
      setErrorMessage('El número de teléfono debe tener 8 dígitos.'); 
      return;
    }
    setShowModal(true); // Mostrar el modal cuando se haga clic en "Guardar"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setModifiedEstudianteInfo(prevState => ({
     ...prevState,
      [name]: value
    }));
  };

  const handleProfileImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  // Función para confirmar y guardar los cambios
  const handleConfirmChanges = () => {
    axios.put(`${API_ROOT}/api/estudiantes/update/${id}`, modifiedEstudianteInfo)
      .then(response => {
        console.log('Cambios guardados exitosamente:', response.data);
        console.log(modifiedEstudianteInfo);
        setEstudianteInfo(modifiedEstudianteInfo);
        setIsEditing(false);
        setShowModal(false); // Ocultar el modal después de guardar los cambios
      })
      .catch(error => {
        console.error('Error al guardar los cambios:', error);
      });
  };

  const profileButtons = [
    {
      text: 'Subir foto de perfil',
      onClick: () => console.log('Subir foto de perfil'),
      roles: [5]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
        <div className="flex justify-center items-center flex-col mb-8">
          <div className="border border-gray-400 w-36 h-36 rounded-full mb-4"></div>
          {currentUser.tipo === 5 &&(
            <input
              type="file"
              onChange={handleProfileImageChange}
              accept="image/*"
            />
          )}
          <ButtonGroup buttons={profileButtons} userType={currentUser.tipo} />
        </div>
        <div className="mb-4 border-b-2 border-gray-600 w-full">
          <label htmlFor="nombre" className="font-bold text-white">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={modifiedEstudianteInfo.nombre || ''}
            onChange={handleChange}
            className="text-white bg-transparent outline-none border-b-2 border-gray-500 w-full"
            disabled={currentUser.tipo === 5} // Deshabilita el campo si el usuario es de tipo 5
          />
        </div>
        <div className="mb-4 border-b-2 border-gray-600 w-full">
          <label htmlFor="apellido1" className="font-bold text-white">Primer apellido:</label>
          <input
            type="text"
            id="apellido1"
            name="apellido1"
            value={modifiedEstudianteInfo.apellido1 || ''}
            onChange={handleChange}
            className="text-white bg-transparent outline-none border-b-2 border-gray-500 w-full"
            disabled={currentUser.tipo === 5} // Deshabilita el campo si el usuario es de tipo 5
          />
        </div>
        <div className="mb-4 border-b-2 border-gray-600 w-full">
          <label htmlFor="apellido2" className="font-bold text-white">Segundo apellido:</label>
          <input
            type="text"
            id="apellido2"
            name="apellido2"
            value={modifiedEstudianteInfo.apellido2 || ''}
            onChange={handleChange}
            className="text-white bg-transparent outline-none border-b-2 border-gray-500 w-full"
            disabled={currentUser.tipo === 5} // Deshabilita el campo si el usuario es de tipo 5
          />
        </div>
        <div className="mb-4 border-b-2 border-gray-600 w-full">
          <label htmlFor="correo" className="font-bold text-white">Correo:</label>
          <input
            type="text"
            id="correo"
            name="correo"
            value={modifiedEstudianteInfo.correo || ''}
            onChange={handleChange}
            className="text-white bg-transparent outline-none border-b-2 border-gray-500 w-full"
            disabled={currentUser.tipo === 5} // Deshabilita el campo si el usuario es de tipo 5
          />
        </div>
        <div className="mb-4 border-b-2 border-gray-600 w-full">
          <label htmlFor="telefono" className="font-bold text-white">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={modifiedEstudianteInfo.telefono || ''}
            onChange={handleChange}
            className="text-white bg-transparent outline-none border-b-2 border-gray-500 w-full"
          />
        </div>
        <div className="mb-4 border-b-2 border-gray-600 w-full">
          <label htmlFor="sede" className="font-bold text-white">Sede:</label>
          <select
            id="sede"
            name="Sede"
            value={modifiedEstudianteInfo.Sede || ''}
            onChange={handleChange}
            className="text-black bg-gray-500 outline-none border-b-2 border-gray-500 w-full"
            disabled={currentUser.tipo === 5} // Deshabilita el campo si el usuario es de tipo 5
          >
            <option value="">Selecciona una sede</option>
            {sedeOptions.map((Sede, index) => (
              <option key={index} value={Sede}>{Sede}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
          <ButtonGroup buttons={userTypeButtons.slice(1)} userType={currentUser.tipo} />
          <ButtonGroup buttons={[{...userTypeButtons[0], onClick: navigateBack }]} userType={currentUser.tipo} />
          <button onClick={handleSaveChanges} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2">Guardar</button>
        </div>
        {errorMessage && <ErrorMessage message={errorMessage} onClose={() => setErrorMessage('')} />}
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-800 p-8 rounded">
            <p className="text-lg font-bold mb-4">¿Está seguro de que desea realizar los cambios?</p>
            <div className="flex justify-end">
              <button
                className="text-white bg-red-500 hover:bg-red-700 font-bold py-2px-6 rounded mr-4"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="text-white bg-green-500 hover:bg-green-700 font-bold py-2 px-6 rounded"
                onClick={handleConfirmChanges}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
      
      {errorMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-blue p-8 rounded">
            <p className="text-lg font-bold mb-4">{errorMessage}</p>
            <button
              className="text-blue bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded active:scale-[.98] active:duration-75 hover:scale-[1.01]"
              onClick={() => setErrorMessage('')}
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

