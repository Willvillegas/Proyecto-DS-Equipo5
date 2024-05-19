import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import API_ROOT from '../../apiRoutes';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Popup from '../components/Popup';
import PopupCancelar from '../components/PopupCancelar';
import PopupFinalizar from '../components/PopupFinalizar';

const DetallesActividad = () => {
    const { id } = useParams();
    const [actividad, setActividad] = useState({});
    const [isOpenAc, setIsOpen] = useState(false);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [isOpenCancelar, setIsOpenCancelar] = useState(false);
    const [isOpenFinalizar, setIsOpenFinalizar] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    const navigate = useNavigate();
    const { currentUser } = useAuthContext();
    const location = useLocation();
    const { idPlan } = location.state;
    //currentUser.tipo = 4

    
    useEffect(() => {
        //simulación de una actividad (Json).
        console.log(id)
        axios.get(`${API_ROOT}/api/actividades/actividad/${id}`)
        .then(response => {
            //delete response.data[0].afiche;
            setActividad(response.data[0]);
        })
        
    }, [id]);

    const handleComentariosClick = () => {
        navigate(`/comentarios/${id}`, { state: { idPlan: idPlan } });
    }
    /*const openPopup = () => {
      setIsOpen(true);
    };*/
  
    const closePopup = () => {
        setIsOpen(false);
    };

    const openPopup = () => {
        setIsOpen(true);
    };
    const setEdition= ()=> {
        setModoEdicion(true);
        setIsOpen(false);
    };

    const guardarCambios = () => {
        setModoEdicion(false);
        console.log("Guardando cambios");

        actividad.afiche = "0";
        setIsOpen(false);
        // validar cada propiedad de la actividad si es vacía colocar un cero
        const envio= {
            semana: actividad.semana === "" ? "0" : actividad.semana,
            fecha: actividad.fecha === "" ? "0" : actividad.fecha,
            previos: actividad.previos === "" ? "0" : actividad.previos,
            publicacion: actividad.fechaPublicacion === "" ? "0" : actividad.fechaPublicacion,
            recordatorios: actividad.recordatorios === "" ? "0" : actividad.recordatorios,
            enlace: actividad.enlace === "" ? "0" : actividad.enlace,
            //afiche: actividad.afiche === "" ? "0" : actividad.afiche,
            tipo: actividad.tipo === "" ? "0" : actividad.tipo,
            modalidad: actividad.modalidad === "" ? "0" : actividad.modalidad,
            estado: actividad.estado === "" ? "0" : actividad.estado,
            idPlan: actividad.idPlan === "" ? "0" : parseInt(idPlan),
            responsables: actividad.responsables === "" ? "0" : actividad.responsables,
            nombre: actividad.nombre === "" ? "0" : actividad.nombre
        }

        //llamo a la api para guardar cambios
        console.log(actividad);
        console.log(envio);
        axios.put(`${API_ROOT}/api/actividades/${id}`, envio)
        .then(response => {
            console.log(response.data);
            alert("Cambios guardados exitosamente: " + response.data.message);

        })
    };

    const guardarCancelacion = (valueTextArea) => {
        setModoEdicion(false);
        console.log("Cancelando actividad");
        console.log(valueTextArea
        );
        setIsOpen(false);
        axios.delete(`${API_ROOT}/api/actividades/${id}/${valueTextArea}`)
        .then(response => {
            console.log(response.data);
            alert("Actividad cancelada exitosamente: " + response.data.message)
        });
        /** 
        //llamo a la api para guardar cambios
        console.log(actividad);
        console.log(envio);
        axios.put(`${API_ROOT}/api/actividades/${id}`, envio)
        .then(response => {
            console.log(response.data);
        })*/
    };

    const finalizarActividad = (valueData) => {
        console.log("Finalizando actividad");
        setIsOpen(false);
        axios.put(`${API_ROOT}/api/actividades/finish/${id}`, valueData)
        .then(response => {
            console.log(response.data);
            alert("Actividad finalizada exitosamente: " + response.data.message)
        });
    }
    const descartarCambios = () => {
        setModoEdicion(false);
        setIsOpen(false);
    }

    const handleVolver = () => {
        navigate(`/actividad/${idPlan}`);
    }
    const closePopupCancelar = () => {
        setIsOpenCancelar(false);
    }
    const openPopupCancelar = () => {
        setIsOpenCancelar(true);
    }

    const closePopupFinalizar = () => {
        setIsOpenFinalizar(false);
    }
    const openPopupFinalizar = () => {
        setIsOpenFinalizar(true);
    }
    useEffect(() => {
        if (actividad.afiche && actividad.afiche.data) {
            const arrayBufferView = new Uint8Array(actividad.afiche.data);
            const blob = new Blob([arrayBufferView], { type: 'image/png' });
            const imageUrl = URL.createObjectURL(blob);
            setImageSrc(imageUrl);
        }
    }, [actividad]);
    return (
        <div className="flex flex-1 flex-col justify-center lg:px-8 items-center min-h-screen m-9">
            <div className=" w-[800px] bg-gray-900 p-8 rounded-lg shadow-lg mx-auto m-20">
                <div className="min-h-screen bg-gray-900 text-white">
                <div className="px-4 sm:px-0">
                    <h1 className="text-base text-center font-bold leading-7 text-gray-50">{actividad.nombre}</h1>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        {/* Información de la actividad hacerlo en un map por medio de la variable actividad*/}
                        {Object.entries(actividad).map(([key, value]) => (
                            <div key={key} className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-50">{key.toUpperCase()}</dt>
                                {key === 'afiche' ? (
                                        <dd className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0">
                                            {value !== undefined && value.data !==0 ? (
                                                <img src={imageSrc} alt="Afiche"  />
                                            ) : (
                                                <span>No hay afiche disponible</span>
                                            )}
                                        </dd>
                                    ) : (
                                        modoEdicion ? ( ((key === 'tipo') ) ?(
                                            <dd className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0">
                                                <select

                                                    value={value}
                                                    onChange={(e) => {
                                                        const updatedActividad = { ...actividad, [key]: e.target.value };
                                                        setActividad(updatedActividad);
                                                    }}
                                                    className="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md p-1"
                                                >
                                                    <option value="Orientadoras">Orientadoras</option>
                                                    <option value="Motivacionales">Motivacionales</option>
                                                    <option value="De apoyo a la vida estudiantil">De apoyo estudiantil</option>
                                                    <option value="De orden tecnico">Orden Tecnico</option>
                                                    <option value="De recreacion">Recreacion</option>
                                                </select>
                                            </dd>
                                        ): ((key === 'modalidad') ) ?(
                                            <dd className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0">
                                                <select
                                                    value={value}
                                                    onChange={(e) => {
                                                        const updatedActividad = { ...actividad, [key]: e.target.value };
                                                        setActividad(updatedActividad);
                                                    }}
                                                    className="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md p-1"
                                                >
                                                    <option value="Presencial">Presencial</option>
                                                    <option value="Remota">Remota</option>
                                                </select>
                                            </dd>
                                        ):((key === 'estado') || (key === 'id')) ?(
                                            <dd className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0">
                                                <input
                                                    type="text"
                                                    value={value}
                                                    onChange={(e) => {
                                                        const updatedActividad = { ...actividad, [key]: e.target.value };
                                                        setActividad(updatedActividad);
                                                    }}
                                                    className="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md p-1"
                                                    disabled
                                                />
                                            </dd>
                                        ):((key === 'fecha') || (key === 'fechaPublicacion')) ?(
                                            <dd className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0">
                                                <input
                                                    type="date"
                                                    value={new Date(value).toISOString().split('T')[0]}
                                                    onChange={(e) => {
                                                        const updatedActividad = { ...actividad, [key]: e.target.value };
                                                        setActividad(updatedActividad);
                                                    }}
                                                    className="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md p-1"
                                                />
                                            </dd>
                                        ):(
                                            <dd className="mt-1 text-sm leading-6 text-gray-800 sm:col-span-2 sm:mt-0">
                                                <input
                                                    type="text"
                                                    value={value}
                                                    onChange={(e) => {
                                                        const updatedActividad = { ...actividad, [key]: e.target.value };
                                                        setActividad(updatedActividad);
                                                    }}
                                                    className="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md p-1"
                                                />
                                            </dd>
                                        )) : (
                                            <dd className="mt-1 text-sm leading-6 text-gray-50 sm:col-span-2 sm:mt-0">{value}</dd>
                                        )
                                )}
                            </div>
                        ))}
                    
                    {/*<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                    </div>*/}
                    </dl>
                </div>
                </div>
                <button onClick={handleVolver} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2">
                Volver
                </button>
                {currentUser.tipo === 3 || currentUser.tipo === 4 ? (
                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-2" onClick={handleComentariosClick}>
                 Comentarios
                </button>
                ) : null}
              {(currentUser.tipo != 4) || (actividad.estado === "Realizada")|| (actividad.estado === "Cancelada") ? <div/>:
                <button
                    onClick={openPopup}
                    className="rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 ml-2">
                    {modoEdicion ? "Guardar" : "Modificar"}
                </button>
              }
                {(currentUser.tipo != 4) || (actividad.estado === "Cancelada") || (actividad.estado === "Realizada")? <div/>:
                <button
                    onClick={openPopupCancelar}
                    className="rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 ml-2">
                    Cancelar
                </button>
                }
                {(currentUser.tipo != 4) || (actividad.estado === "Cancelada") || (actividad.estado === "Realizada") ? <div/>:
                <button
                    onClick={openPopupFinalizar}
                    className="rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 ml-2">
                    Finalizar Actividad
                </button>
                
                }
                
                <Popup isOpen={isOpenAc} 
                        close={closePopup} 
                        edit={setEdition} 
                        modoEdicion={modoEdicion} 
                        cambios={guardarCambios}
                        descartarCambios={descartarCambios} 
                />
                <PopupCancelar isOpenC={isOpenCancelar} 
                                close={closePopupCancelar}
                                cancelar ={guardarCancelacion} 
                />
                <PopupFinalizar isOpenF={isOpenFinalizar}
                                close={closePopupFinalizar}
                                finalizar={finalizarActividad}
                />  


            </div>
        </div>
    );
};

export default DetallesActividad;