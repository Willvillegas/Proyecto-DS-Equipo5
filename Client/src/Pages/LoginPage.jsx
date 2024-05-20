import React, { useContext, useState } from "react";
import { Input } from "../components/ui/Input"; // Importación del componente Input
import { Button } from "../components/ui/Button"; // Importación del componente Button
import { AuthContext, useAuthContext } from "../context/AuthContext";
import axios from "axios";
import API_ROOT from "../../apiRoutes";
import { data } from "autoprefixer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const { getLoginStatus, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario
    // Por ejemplo, puedes enviar una solicitud al servidor para verificar las credenciales
    // Si las credenciales son válidas, puedes actualizar el estado global del usuario usando dispatch
    const data = {
      correo: email,
      contrasenna: password
    }
    try{
      console.log(data)
      axios.post(`${API_ROOT}/api/usuario/login`, data)
        .then(response => {
          console.log(response.data)
          if(response.data!=50000){
            dispatch({ type: 'LOGIN', payload: response.data });
            navigate(`/menu`);
          }
        })
    }catch (error){
      console.log(error)
    }
    // Después de autenticar al usuario, podrías redirigirlo a otra página
    };

    const forgot = () => {
      navigate('/forgot-password')
    }

  return (
    <>
      {/* Contenedor principal */}
      <div className="flex flex-1 flex-col justify-center lg:px-8 items-center min-h-screen">
        {/* Contenedor interno */}
        <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg shadow-lg mx-auto">
          {/* Título del formulario */}
          <h2 className="mt-8 text-center text-2xl font-bold leading-5 text-white">
            Iniciar sesión en su cuenta
          </h2>
          {/* Contenedor del formulario */}
          <div className="bg-gray-900 mt-8 p-8 justify-center rounded-lg sm:mx-auto sm:w-full mx-auto sm:max-w-sm">
            {/* Formulario */}
            <form className="space-y-2">
              {/* Campo de correo electrónico */}
              <div>
                <label htmlFor="email" className="block text-sm justify-center font-medium leading-6 text-white">
                  Correo electrónico
                </label>
                <div className="mt-2">
                  {/* Componente Input para el correo electrónico */}
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Ingrese su correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              {/* Campo de contraseña */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Contraseña
                  </label>
                  <div className="text-sm">
                    {/* Enlace para recuperar contraseña */}
                    <a onClick={forgot} className="font-semibold text-indigo-600 hover:text-indigo-500">
                      ¿Olvidó su contraseña?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  {/* Componente Input para la contraseña */}
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {/* Botón de inicio de sesión */}
              <div className="mt-6">
                {/* Componente Button para iniciar sesión */}
                <Button type="submit" onClick={handleLogin}>Iniciar sesión</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
