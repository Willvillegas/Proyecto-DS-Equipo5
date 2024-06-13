import React, { useState, useEffect } from 'react';
import { Input } from "../components/ui/Input"; // Importación del componente Input
import { Button } from "../components/ui/Button"; // Importación del componente Button
import axios from 'axios';
import API_ROOT from '../../apiRoutes';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; // Importa el contexto de autenticación

function CambiarContrasennaE() {
  const [nuevaContrasenna, setNueva] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { currentUser } = useAuthContext(); // Obtén el usuario actual del contexto de autenticación
  const userId = currentUser.id;

  // useEffect para imprimir el id del usuario en la consola al montar el componente
  useEffect(() => {
    console.log('User ID:', userId);
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (nuevaContrasenna !== '' && confirmar !== '') {
      if (nuevaContrasenna.length > 6 || confirmar.length > 6) {
        setError('La contraseña debe tener un máximo de 6 caracteres.');
        return;
      }

      if (nuevaContrasenna.length < 6 || confirmar.length < 6) {
        setError('La contraseña debe tener un mínimo de 6 caracteres.');
        return;
      }

      if (nuevaContrasenna === confirmar) {
        console.log('Contraseña confirmada:', confirmar); // Imprimir en consola la contraseña confirmada
        const data = {
          id: userId, // Incluye el id en el objeto data
          contrasenna: confirmar
        };
        axios.post(`${API_ROOT}/api/usuario/cambiar-contrasenna-e`, data)
          .then(response => {
            if ('message' in response.data) {
              navigate('/');
            }
          })
          .catch(error => {
            console.error("Error changing password:", error);
            alert("Hubo un error al cambiar la contraseña.");
          });
      } else {
        setError('Las contraseñas no coinciden.');
      }
    } else {
      setError('Por favor, complete todos los campos.');
    }
  };

  const handleBack = () => {
    navigate(-1); // Navegar a la página anterior
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-white text-2xl font-bold mb-4">Cambiar contraseña</h2>
        {/* Contenedor del formulario */}
        <div className="bg-gray-900 mt-8 p-8 justify-center rounded-lg sm:mx-auto sm:w-full mx-auto sm:max-w-sm">
          {/* Formulario */}
          <form className="space-y-2" onSubmit={handleSubmit}>
            {error && <div className="text-red-500">{error}</div>}
            <div className="mt-2">
              {/* Componente Input para la contraseña nueva */}
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={nuevaContrasenna}
                onChange={(event) => setNueva(event.target.value)}
                placeholder="Contraseña nueva"
                maxLength={6} // Limitar a 6 caracteres
              />
            </div>
            <div className="mt-2">
              {/* Componente Input para confirmar contraseña */}
              <Input
                id="passwordE"
                name="passwordE"
                type="password"
                required
                value={confirmar}
                onChange={(event) => setConfirmar(event.target.value)}
                placeholder="Confirmar contraseña"
                maxLength={6} // Limitar a 6 caracteres
              />
            </div>
            <div className="mt-6 flex justify-between space-x-4">
              {/* Botón Volver */}
              <Button type="button" onClick={handleBack}>Volver</Button>
              {/* Botón Confirmar */}
              <Button type="submit">Confirmar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CambiarContrasennaE;
