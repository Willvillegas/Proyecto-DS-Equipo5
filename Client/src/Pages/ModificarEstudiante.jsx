import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_ROOT from '../../apiRoutes';

const userType = 5;

const buttons = [
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

const ProfileInfo = ({ estudianteInfo }) => (
  <div className="mb-8">
    {/* Carnet */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Carnet:</p>
      <p className="text-white">{estudianteInfo.carnet}</p>
    </div>
    {/* Nombre */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Nombre completo:</p>
      <p className="text-white">{estudianteInfo.nombre} {estudianteInfo.apellido1} {estudianteInfo.apellido2}</p>
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
    {/* Sede */}
    <div className="mb-4 border-b-2 border-gray-600 w-full">
      <p className="font-bold text-white">Sede:</p>
      <p className="text-white">{estudianteInfo.Sede}</p>
    </div>

  </div>
);


function DetallesEstudiante() {
  const { id } = useParams(); // Obtener el ID del estudiante de los parámetros de la URL
  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);
  const [estudianteInfo, setEstudianteInfo] = useState([]);
  const [modifiedEstudianteInfo, setModifiedEstudianteInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get(`${API_ROOT}/api/estudiantes/${id}`)
      .then(response => {
        setEstudianteInfo(response.data[0]);
        setModifiedEstudianteInfo(response.data[0]); // Inicialmente, los datos modificados son iguales a los datos originales
      })
      .catch(error => {
        console.error('Error al obtener la información del estudiante:', error);
      });
  }, []);

  const handleSaveChanges = () => {
    // Enviar los datos modificados al servidor para actualizar
    axios.put(`${API_ROOT}/api/estudiantes/update/${id}`, modifiedEstudianteInfo)
      .then(response => {
        console.log('Cambios guardados exitosamente:', response.data);
        setEstudianteInfo(modifiedEstudianteInfo); // Actualizar los datos originales con los datos modificados
        setIsEditing(false); // Deshabilitar la edición
      })
      .catch(error => {
        console.error('Error al guardar los cambios:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let modifiedValue = value;
  
    // Validar el teléfono
    if (name === 'telefono' && !/^\d{8}$/.test(value)) {
      // Si el teléfono no tiene 8 dígitos, no se actualiza
      return;
    }
  
    // Validar la sede
    if (name === 'sede' && !['Cartago', 'San José', 'Limón', 'Alajuela', 'San Carlos'].includes(value)) {
      // Si la sede no es una de las permitidas, no se actualiza
      return;
    }
  
    setModifiedEstudianteInfo(prevState => ({
      ...prevState,
      [name]: modifiedValue
    }));
  };
  

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
        <h1 className="text-white text-center text-3xl font-bold mb-4">Estudiante</h1>
        {/* Información del estudiante en modo editable */}
        <div className="mb-4 border-b-2 border-gray-600 w-full">
          <label htmlFor="nombre" className="font-bold text-white">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={modifiedEstudianteInfo.nombre || ''}
            onChange={handleChange}
            className="text-white bg-transparent outline-none border-b-2 border-gray-500 w-full"
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
          <input
            type="sede"
            id="sede"
            name="sede"
            value={modifiedEstudianteInfo.Sede || ''}
            onChange={handleChange}
            className="text-white bg-transparent outline-none border-b-2 border-gray-500 w-full"
          />
        </div>
       
        <div className="flex justify-center">
          <ButtonGroup buttons={buttons.slice(1)} userType={userType} />
          <ButtonGroup buttons={[{ ...buttons[0], onClick: navigateBack }]} userType={userType} />
          <button onClick={handleSaveChanges} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2">Guardar cambios</button>
        </div>
      </div>
    </div>
  );
}

export default DetallesEstudiante;
