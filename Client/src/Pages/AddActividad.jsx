import React, { useState, useEffect } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


const AddActividad = () => {
    const [actividad, setActividad] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const { idPlan } = useParams();

    useEffect(() => {
        // Your code here
    }, []);

    const handleInputChange = (e) => {
        setActividad(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Your code here
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <div className="flex flex-1 flex-col justify-center lg:px-8 items-center min-h-screen m-9">
                <div className=" w-[800px] bg-gray-900 p-8 rounded-lg shadow-lg mx-auto m-20">
                    <div className="min-h-screen bg-gray-900 text-white">
                        <div className="px-4 sm:px-0">
                            <h1 className="text-base text-center font-bold leading-7 text-gray-50">{actividad.previos}</h1>
                        </div>
                        <h1>Add Actividad</h1>
                        {/**Formulario para crear actividad 
                         * const envio= {
                            semana: actividad.semana === "" ? "0" : actividad.semana,
                            fecha: actividad.fecha === "" ? "0" : actividad.fecha,
                            previos: actividad.previos === "" ? "0" : actividad.previos,
                            publicacion: actividad.fechaPublicacion === "" ? "0" : actividad.fechaPublicacion,
                            recordatorios: actividad.recordatorios === "" ? "0" : actividad.recordatorios,
                            enlace: actividad.enlace === "" ? "0" : actividad.enlace,
                            afiche: actividad.afiche === "" ? "0" : actividad.afiche,
                            tipo: actividad.tipo === "" ? "0" : actividad.tipo,
                            modalidad: actividad.modalidad === "" ? "0" : actividad.modalidad,
                            estado: actividad.estado === "" ? "0" : actividad.estado,
                            idPlan: actividad.idPlan === "" ? "0" : parseInt(idPlan),
                            responsables: actividad.responsables === "" ? "0" : actividad.responsables,
                            nombre: actividad.nombre === "" ? "0" : actividad.nombre
                        }
                         * 
                         * 
                        */}
                        <form onSubmit={handleSubmit} className="mt-6 border-t border-gray-100 ">
                            <dl className="divide-y divide-gray-100">
                                
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt  className="text-sm font-medium leading-6 text-gray-50"> Nombre</dt>
                                <dd>                                    
                                    <input type="text" name="nombre" placeholder="Nombre" value={actividad.nombre} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0"/>
                                </dd>                                
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt  className="text-sm font-medium leading-6 text-gray-50"> Semana</dt>
                                <dd>                                    
                                    <input type="text" name="semana" placeholder="Semana" value={actividad.semana} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" />
                                </dd>
                            </div>                            
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt  className="text-sm font-medium leading-6 text-gray-50"> Fecha</dt>
                                <dd>
                                    <input type="date" name="fecha" placeholder="Fecha" value={actividad.fecha} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0"/>
                                </dd>
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className='text-sm font-medium leading-6 text-gray-50'>Previos</dd>
                                <dt>
                                    <input type="text" name="previos" placeholder="Previos" value={actividad.previos} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0"/>
                                </dt>
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                
                            </div>
                        
                        
                        
                        
                        <input type="text" name="publicacion" placeholder="Publicacion" value={actividad.publicacion} onChange={handleInputChange} />
                        <input type="text" name="recordatorios" placeholder="Recordatorios" value={actividad.recordatorios} onChange={handleInputChange} />
                        <input type="text" name="enlace" placeholder="Enlace" value={actividad.enlace} onChange={handleInputChange} />
                        <input type="text" name="afiche" placeholder="Afiche" value={actividad.afiche} onChange={handleInputChange} />
                        <input type="text" name="tipo" placeholder="Tipo" value={actividad.tipo} onChange={handleInputChange} />
                        <input type="text" name="modalidad" placeholder="Modalidad" value={actividad.modalidad} onChange={handleInputChange} />
                        <input type="text" name="estado" placeholder="Estado" value={actividad.estado} onChange={handleInputChange} />
                        <input type="text" name="idPlan" placeholder="IdPlan" value={actividad.idPlan} onChange={handleInputChange} />
                        <input type="text" name="responsables" placeholder="Responsables" value={actividad.responsables} onChange={handleInputChange} />
                        <button type="submit">Add Actividad</button>
                        </dl>
                        </form>
                    {error && <p>{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddActividad;