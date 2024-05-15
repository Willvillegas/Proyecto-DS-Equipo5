import { useState } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react' 
import axios from 'axios';
import API_ROOT from '../../apiRoutes';
import { useNavigate } from 'react-router-dom';

function PopupCrearPlan({ isOpenC, close, idEquipo }) {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const data = {
            nombre: name,
            estado: '',
            equipo: idEquipo
        }
        axios.post(`${API_ROOT}/api/plantrabajo`, data)
        .then(response => {
            if ('message' in response.data){
                window.location.reload();
            }
        }) 
    }

    return (
        <>
            <Transition appear show={isOpenC}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    {/* Aplicar el desenfoque al fondo cuando el diálogo está activo */}
                    <Transition
                        as="div"
                        className="fixed inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur"
                        show={isOpenC}
                    />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                                    <DialogTitle as="h1" className="text-base/7 font-medium text-white">
                                        ¿Desea crear una actividad?
                                    </DialogTitle>
                                    <p className="mt-2 text-sm/6 text-white/50">
                                        Ingrese el nombre del plan a crear.
                                    </p>
                                    <div className="mt-4">
                                        <button
                                            className="absolute top-2 right-2 text-white hover:text-gray-300 focus:outline-none"
                                            onClick={close}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                        <div className="bg-gray-900 mt-6 p-3 justify-center rounded-lg sm:mx-auto sm:w-full mx-auto sm:max-w-sm">
                                            <input
                                                type="text"
                                                placeholder="Escribe el nombre"
                                                multiple
                                                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            
                                            {/* Optional: Display the selected file names */}
                                            
                                        </div>
                                        <Button 
                                            disabled={name == ''}
                                            className="w-full mt-3 text-center inline-flex items-center justify-center   gap-2 rounded-md bg-indigo-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-green-500 data-[open]:bg-red-600 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={handleSubmit} // Aquí se llama a la función para cerrar el diálogo
                                        >
                                            Crear plan
                                        </Button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default PopupCrearPlan;
