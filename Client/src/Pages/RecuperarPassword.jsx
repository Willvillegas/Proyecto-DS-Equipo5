import React from 'react';
import { Input } from "../components/ui/Input"; // Importación del componente Input
import { Button } from "../components/ui/Button"; // Importación del componente Button


function RecuperarPassword() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-white text-2xl font-bold mb-4">Cambiar contraseña</h2>
        {/* Contenedor del formulario */}
        <div className="bg-gray-900 mt-8 p-8 justify-center rounded-lg sm:mx-auto sm:w-full mx-auto sm:max-w-sm">
          {/* Formulario */}
          <form className="space-y-2" action="#" method="POST">
            <div>
              <div className="mt-2">
                {/* Componente Input para el código */}
                <Input 
                  id="codigo"
                  name="codigo"
                  required
                  placeholder="Código"
                />
              </div>
              <div className="mt-2">
                {/* Componente Input para la contraseña nueva */}
                <Input 
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Contraseña nueva"
                />
              </div>
              <div className="mt-2">
                {/* Componente Input para confirmar contraseña */}
                <Input 
                  id="passwordC"
                  name="passwordC"
                  type="password"
                  required
                  placeholder="Confirmar contraseña"
                />
              </div>
            </div>
            <div className="mt-6">
              {/* Componente Button para */}

              <Button type="submit">Confirmar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RecuperarPassword;