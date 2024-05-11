import React from 'react';
import { Input } from "../components/ui/Input"; // Importación del componente Input
import { Button } from "../components/ui/Button"; // Importación del componente Button

function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-white text-2xl font-bold mb-4">¿Olvidó su contraseña?</h2>
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
            {/* Botón de inicio de sesión */}
            <div className="mt-6">
              {/* Componente Button para iniciar sesión */}
              <Button type="submit">Iniciar sesión</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
