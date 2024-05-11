import React from "react";
import { Input } from "../components/ui/Input"; // Importación del componente Input
import { Button } from "../components/ui/Button"; // Importación del componente Button

function LoginPage() {
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
            <form className="space-y-2" action="#" method="POST">
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
                    required
                    placeholder="Ingrese su correo"
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
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
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
                  />
                </div>
              </div>
              {/* Botón de inicio de sesión */}
              <div className="mt-6">
                {/* Componente Button para iniciar sesión */}
                <Button type="submit">Iniciar sesión</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
