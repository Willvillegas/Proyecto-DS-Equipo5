import React, { useEffect, useState } from 'react';
import { Input } from "../components/ui/Input"; // Importación del componente Input
import { Button } from "../components/ui/Button"; // Importación del componente Button
import axios from 'axios';
import API_ROOT from '../../apiRoutes';
import { useNavigate } from 'react-router-dom';


function RecuperarPassword() {
  const [codigo, setCodigo] = useState('');
  const [nuevaContrasenna, setNueva] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      if(codigo != '' && nuevaContrasenna != ''  && confirmar !=''){
        if(nuevaContrasenna==confirmar){
          const data = {
            token: codigo,
            contrasenna: confirmar
          }
          axios.post(`${API_ROOT}/api/usuario/resetpassword`, data)
          .then(response => {
            if('message' in response.data){
              navigate('/')
            }
          })
        }
      }
    }catch (error){

    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-white text-2xl font-bold mb-4">Cambiar contraseña</h2>
        {/* Contenedor del formulario */}
        <div className="bg-gray-900 mt-8 p-8 justify-center rounded-lg sm:mx-auto sm:w-full mx-auto sm:max-w-sm">
          {/* Formulario */}
          <form className="space-y-2">
            <div>
              <div className="mt-2">
                {/* Componente Input para el código */}
                <Input 
                  id="codigo"
                  name="codigo"
                  required
                  value={codigo}
                  onChange={(event) => setCodigo(event.target.value)}
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
                  value={nuevaContrasenna}
                  onChange={(event) => setNueva(event.target.value)}
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
                  value={confirmar}
                  onChange={(event) => setConfirmar(event.target.value)}
                  placeholder="Confirmar contraseña"
                />
              </div>
            </div>
            <div className="mt-6">
              {/* Componente Button para */}
              <Button type="submit" onClick={(e) => handleSubmit(e)}>Confirmar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RecuperarPassword;