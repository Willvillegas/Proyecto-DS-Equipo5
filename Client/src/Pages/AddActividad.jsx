import React, { useState, useEffect, act } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


const AddActividad = () => {
    const [actividad, setActividad] = useState('');
    const [error, setError] = useState('');
    const [afiche, setAfiche] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const { idPlan } = location.state;

    useEffect(() => {
        // Your code here
    }, []);

    const handleInputChange = (e) => {
        if (e.target.name === 'afiche') {
            setAfiche(e.target.files[0]);
        } else {
            setActividad({ ...actividad, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            actividad.idPlan = parseInt(actividad.idPlan);
            actividad.previos = parseInt(actividad.previos);
            actividad.recordatorios = parseInt(actividad.recordatorios);
            actividad.semana = parseInt(actividad.semana);
            console.log(afiche);
            setIsLoading(true);
            const formData = new FormData();
            formData.append('semana', actividad.semana);
            formData.append('fecha', actividad.fecha);
            formData.append('previos', actividad.previos);
            formData.append('publicacion', actividad.publicacion);
            formData.append('recordatorios', actividad.recordatorios);
            formData.append('enlace', actividad.enlace);
            formData.append('afiche', afiche);
            formData.append('tipo', actividad.tipo);
            formData.append('modalidad', actividad.modalidad);
            formData.append('estado', actividad.estado);
            formData.append('idPlan', idPlan);
            formData.append('responsables', actividad.responsables);
            formData.append('nombre', actividad.nombre);
            console.log(formData);
            await axios.post(`${API_ROOT}/api/actividades`, formData).then((response) => {
                console.log(response);
                alert('Actividad creada exitosamente');
                navigate(`/actividad/${idPlan}`);
            });
        } catch (error) {
            setError('An error occurred. Please try again.');
            alert('Error al crear la actividad');
        }
        setIsLoading(false);
    };

    const handleVolver = () => {
        navigate(`/actividad/${idPlan}`);
    }

    return (
        <div>
            <div className="flex flex-1 flex-col justify-center lg:px-8 items-center min-h-screen m-9">
                {isLoading && (
                    <div className="absolute inset-0 bg-gray-900 opacity-50 flex justify-center items-center z-50">
                        <p className="text-white text-xl">Cargando...</p>
                    </div>
                )}
                <div className=" w-[800px] bg-gray-900 p-8 rounded-lg shadow-lg mx-auto m-20">
                    <div className="min-h-screen bg-gray-900 text-white">
                        <div className="px-4 sm:px-0">
                            <h1 className="text-base text-center font-bold leading-7 text-gray-50">{actividad.nombre}</h1>
                        </div>
                        <h1>Add Actividad</h1>
                        
                        <form onSubmit={handleSubmit} className="mt-6 border-t border-gray-100 " encType="multipart/form-data">
                            <dl className="divide-y divide-gray-100">
                                
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt  className="text-sm font-medium leading-6 text-gray-50"> Nombre</dt>
                                <dd>                                    
                                    <input type="text" name="nombre" placeholder="Nombre" value={actividad.nombre} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" required/>
                                </dd>                                
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt  className="text-sm font-medium leading-6 text-gray-50"> Semana</dt>
                                <dd>                                    
                                    <input type="text" name="semana" placeholder="Semana" value={actividad.semana} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" required/>
                                </dd>
                            </div>                            
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt  className="text-sm font-medium leading-6 text-gray-50"> Fecha</dt>
                                <dd>
                                    <input type="date" name="fecha" placeholder="Fecha" value={actividad.fecha} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" required/>
                                </dd>
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className='text-sm font-medium leading-6 text-gray-50'>Previos</dd>
                                <dt>
                                    <input type="text" name="previos" placeholder="Previos" value={actividad.previos} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" required/>
                                </dt>
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className='text-sm font-medium leading-6 text-gray-50'>Fecha de publicación</dd>
                                <dt>
                                    <input type="date" name="publicacion" placeholder="Publicacion" value={actividad.publicacion} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" required/>
                                </dt>
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className='text-sm font-medium leading-6 text-gray-50'>Recordatorio</dd>
                                <dt>
                                    <input type="text" name="recordatorios" placeholder="Recordatorios" value={actividad.recordatorios} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0"required />
                                </dt>
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className='text-sm font-medium leading-6 text-gray-50'>Enlace</dd>
                                <dt>
                                    <input type="text" name="enlace" placeholder="Enlace" value={actividad.enlace} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" required/>
                                </dt>
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className='text-sm font-medium leading-6 text-gray-50'>Afiche</dd>
                                <dt>
                                    <input type="file" name="afiche" placeholder="Afiche" value={actividad.afiche} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" accept="image/png" required/>
                                </dt>
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className='text-sm font-medium leading-6 text-gray-50'>Tipo</dd>
                                <dt>
                                    <select name="tipo" value={actividad.tipo} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" required>
                                        <option value="">Selecciona el tipo</option>
                                        <option value="Orientadoras">Orientadoras</option>
                                        <option value="Motivacionales">Motivacionales</option>
                                        <option value="De apoyo a la vida estudiantil">De apoyo estudiantil</option>
                                        <option value="De orden tecnico">Orden Tecnico</option>
                                        <option value="De recreacion">Recreacion</option>
                                    </select>
                                </dt>
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className='text-sm font-medium leading-6 text-gray-50'>Modalidad</dd>
                                <dt>
                                    <select name="modalidad" value={actividad.modalidad} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" required>
                                        <option value="">Selecciona la modalidad</option>
                                        <option value="Presencial">Presencial</option>
                                        <option value="Remota">Remota</option>
                                    </select>
                                </dt>
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className='text-sm font-medium leading-6 text-gray-50'>Estado</dd>
                                <dt>
                                    <input type="text" name="estado" placeholder="Estado" value={1} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" disabled/>
                                </dt>
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className='text-sm font-medium leading-6 text-gray-50'>IdPlan</dd>
                                <dt>
                                    <input type="text" name="idPlan" placeholder="IdPlan" value={idPlan} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" disabled/>
                                </dt>
                            </div>
                            <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className='text-sm font-medium leading-6 text-gray-50'>Responsables</dd>
                                <dt>
                                    <input type="text" name="responsables" placeholder="Responsables" value={actividad.responsables} onChange={handleInputChange} className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0" required/>
                                </dt>
                            </div>
                            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2 mt-5 text-center">
                                <button type="submit">Crear Actividad</button>
                            </div>
                        </dl>
                        </form>
                    {error && <p>{error}</p>}
                    </div>
                    <button onClick={handleVolver} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2 mt-7">
                        Volver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddActividad;