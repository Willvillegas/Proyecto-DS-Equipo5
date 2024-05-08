import React from "react";
import ForgotPasswordPage from "./ForgotPasswordPage";


// Definición del componente funcional LoginPage
const LoginPage = () => {
  return (
    // Contenedor principal con estilos Tailwind CSS
    <div className="min-h-screen flex items-center justify-center bg-white p-11">
      {/* Contenedor interno con estilos Tailwind CSS */}
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg shadow-lg">
        {/* Título del formulario */}
        <h2 className="text-2xl text-white font-bold mb-4">Iniciar sesión en su cuenta</h2>
        {/* Campo de entrada de correo electrónico */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-300 font-bold mb-2" style={{ color: "gray" }}>
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        {/* Campo de entrada de contraseña */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-white-300 text-sm font-bold mb-2" style={{ color: "gray" }}>
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ingrese su contraseña"
          />
        </div>
        {/* Opción de recordar contraseña */}
        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm text-gray-300">
            Recuérdame
          </label>
        </div>
        {/* Botón de inicio de sesión */}
        <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01]  w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
          Iniciar Sesión
        </button>
        {/* Enlace para recuperar contraseña */}
        <div className="hover:scale-[1.01] text-sm text-indigo-500 mt-2">
          <p>¿Olvidó su contraseña?</p>
              <a
              href="/forgot-password-page" >
              </a>
         </div>
      </div>
    </div>
  );
};

export default LoginPage;
