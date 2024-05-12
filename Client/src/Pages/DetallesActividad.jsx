import React, { useState, useEffect } from 'react';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DetallesActividad = () => {
    const { id } = useParams();
    const [actividad, setActividad] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        //simulación de una actividad (Json).
        console.log(id)
        axios.get(`${API_ROOT}/api/actividades/${id}`)
        .then(response => {
            setActividad(response.data[0]);
        })
        
    }, [id]);

    const handleComentariosClick = () => {
        navigate(`/comentarios/${id}`);
    }

    return (
        <div className="flex flex-1 flex-col justify-center lg:px-8 items-center min-h-screen m-9">
            <div className=" w-[800px] bg-gray-900 p-8 rounded-lg shadow-lg mx-auto m-20">
                <div className="min-h-screen bg-gray-900 text-white">
                <div className="px-4 sm:px-0">
                    <h1 className="text-base text-center font-bold leading-7 text-gray-50">{actividad.previos}</h1>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        {/* Información de la actividad hacerlo en un map por medio de la variable actividad*/}
                        {Object.entries(actividad).map(([key, value]) => (
                            <div key={key} className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-50">{key}</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-50 sm:col-span-2 sm:mt-0">{key == "afiche" ? "": value}</dd>
                            </div>
                        ))}
                    
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                            <div className="flex w-0 flex-1 items-center">
                                
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                                <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Download
                                </a>
                            </div>
                            </li>
                            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                            <div className="flex w-0 flex-1 items-center">
                                
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Download
                                </a>
                            </div>
                            </li>
                        </ul>
                        </dd>
                    </div>
                    </dl>
                </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2">
                Volver
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2"
                    onClick={handleComentariosClick}>
                    Comentarios
                </button>
            </div>
        </div>
    );
};

export default DetallesActividad;