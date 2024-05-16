import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Importar useParams para obtener el ID del profesor desde la URL
import API_ROOT from '../../apiRoutes';
import { useAuthContext } from '../context/AuthContext';
import ErrorMessage from '../components/ErrorMessage'; // Asegúrate de tener este componente o crear uno similar

const buttons = [
  {
    text: 'Cancelar',
    onClick: () => console.log('Cancelar'),
    roles: [1, 2, 3, 4, 5]
  },
  {
    text: 'Guardar',
    onClick: () => handleSaveClick(),
    roles: [1, 2, 3, 4, 5]
  }
];

const profileButtons = [
  {
    text: 'Subir foto de perfil',
    onClick: () => console.log('Subir foto de perfil'),
    roles: [1, 2, 3, 4, 5]
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

const ButtonList = ({ buttons }) => {
  const { currentUser } = useAuthContext();

  return (
    <div className="flex justify-center">
      {buttons.map((button, index) => {
        if (button.roles.includes(currentUser.tipo)) {
          return <Button key={index} text={button.text} onClick={button.onClick} />;
        }
        return null;
      })}
    </div>
  );
};

function ModificarProfesor() {
  const { currentUser } = useAuthContext();
  const { id } = useParams(); // Obtener el ID del profesor desde la URL
  const navigate = useNavigate(); // Usar navigate para redirigir después de guardar
  const [profesorInfo, setProfesorInfo] = useState({
    codigo: 'AL-01',
    nombre: 'Esteban',
    correo: 'esteban@example.com',
    oficina: '0000-0000 [extension 0000]',
    celular: '00000000'
  });
  const [modifiedProfesorInfo, setModifiedProfesorInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchProfesorInfo = async () => {
      try {
        const response = await axios.get(`${API_ROOT}/api/profesores/${id}`); // Usar el ID del profesor desde la URL
        setProfesorInfo(response.data[0]);
        setModifiedProfesorInfo(response.data[0]);
      } catch (error) {
        console.error('Error al obtener los datos del profesor:', error);
      }
    };
    fetchProfesorInfo();
  }, [id]);

  const handleSaveChanges = () => {
    if (!validateInputs() || !validateCelular(modifiedProfesorInfo.telPersonal)) {
      setIsInvalidInput(true);
      return;
    }

    axios.put(`${API_ROOT}/api/profesores/update/${id}`, modifiedProfesorInfo)
      .then(response => {
        console.log('Cambios guardados exitosamente:', response.data);
        setProfesorInfo(modifiedProfesorInfo);
        setShowModal(false);
        navigate(`/modificar-profesor/${id}`); 
      })
      .catch(error => {
        console.error('Error al guardar los cambios:', error);
        setErrorMessage('Error al guardar los cambios. Por favor, inténtalo de nuevo.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModifiedProfesorInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateInputs = () => {
    for (const key in modifiedProfesorInfo) {
      if (key !== 'codigo' && !modifiedProfesorInfo[key]) {
        return false;
      }
    }
    return true;
  };

  const validateCelular = (value) => {
    const regex = /^\d{8}$/;
    return regex.test(value);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
        <div className="flex justify-center items-center flex-col mb-8">
          <div className="border border-gray-400 w-36 h-36 rounded-full mb-4"></div>
          <ButtonList buttons={profileButtons} />
        </div>
        <div className="mb-8">
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Código:</p>
            <input
              className="w-full bg-gray-700 text-white p-2 rounded cursor-not-allowed"
              type="text"
              name="codigo"
              value={profesorInfo.codigo || ''}
              disabled
            />
          </div>
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Nombre:</p>
            <input
              className="w-full bg-gray-700 text-white p-2 rounded"
              type="text"
              name="nombre"
              value={modifiedProfesorInfo.nombre || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Correo:</p>
            <input
              className="w-full bg-gray-700 text-white p-2 rounded"
              type="email"
              name="correo"
              value={modifiedProfesorInfo.correo || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Oficina:</p>
            <input
              className="w-full bg-gray-700 text-white p-2 rounded"
              type="text"
              name="telOficina"
              value={modifiedProfesorInfo.telOficina || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 border-b-2 border-gray-600 w-full">
            <p className="font-bold text-white">Celular:</p>
            <input
              className="w-full bg-gray-700 text-white p-2 rounded"
              type="tel"
              name="telPersonal"
              value={modifiedProfesorInfo.telPersonal || ''}
              onChange={handleChange}
              required
              pattern="^\d{8}$"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <ButtonList buttons={buttons.map(button => ({
            ...button,
            onClick: button.text === 'Guardar' ? handleSaveChanges : button.onClick
          }))} />
        </div>
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
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="text-white bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded active:scale-[.98] active:duration-75 hover:scale-[1.01]"
                onClick={handleSaveChanges}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
      {isInvalidInput && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-blue p-8 rounded">
            <p className="text-lg font-bold mb-4">
              Por favor, complete todos los campos obligatorios.
            </p>
            <button
              className="text-blue bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded active:scale-[.98] active:duration-75 hover:scale-[1.01]"
              onClick={() => setIsInvalidInput(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
      {errorMessage && (
        <ErrorMessage message={errorMessage} onClose={() => setErrorMessage('')} />
      )}
    </div>
  );
}

export default ModificarProfesor;
