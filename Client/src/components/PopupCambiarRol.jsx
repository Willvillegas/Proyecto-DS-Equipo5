import { useState } from 'react';
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import axios from 'axios';
import API_ROOT from '../../apiRoutes';
import { useAuthContext } from '../context/AuthContext';

function PopupCambiarRol({ isOpenC, close, idProfesor, idAsistnete }) {
    const { currentUser } = useAuthContext(); // Obtener el usuario actual del contexto de autenticación
    const [rolUsuario, setRol] = useState('');
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const roles = ['Guia', 'Coordinador'];

    const handleSubmit = () => {
        console.log('ID del profesor:', idProfesor);
        console.log('ID del equipo:', currentUser.idEquipo);
        const data = {
            id: idProfesor,
            rol: rolUsuario,
            idEquipo: 1,
            idAsistnete: currentUser.id,
        };
        axios.put(`${API_ROOT}/api/profesores/rol`, data)
            .then(response => {
                setIsConfirmationOpen(true); // Mostrar la semiventanita de confirmación
            })
            .catch(error => {
                console.error("There was an error changing the role!", error);
            });
    };

    return (
        <>
            <Transition appear show={isOpenC}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
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
                                        ¿Desea cambiar el rol?
                                    </DialogTitle>
                                    <p className="mt-2 text-sm/6 text-white/50">
                                        Seleccione el rol deseado.
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
                                            <select
                                                className="w-full mb-4 p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
                                                value={rolUsuario}
                                                onChange={(e) => setRol(e.target.value)}
                                            >
                                                <option value="">Selecciona un rol</option>
                                                {roles.map((rol, index) => (
                                                    <option key={index} value={rol}>
                                                        {rol}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <Button 
                                            className="w-full mt-3 text-center inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-green-500 data-[open]:bg-red-600 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={handleSubmit} // Aquí se llama a la función para cerrar el diálogo
                                        >
                                            Cambiar rol
                                        </Button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Semiventanita de confirmación */}
            <Transition appear show={isConfirmationOpen}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={() => setIsConfirmationOpen(false)}>
                    <Transition
                        as="div"
                        className="fixed inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur"
                        show={isConfirmationOpen}
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
                                        Rol cambiado con éxito
                                    </DialogTitle>
                                    <div className="mt-4 flex justify-end">
                                        <Button 
                                            className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-indigo-600"
                                            onClick={() => setIsConfirmationOpen(false)}
                                        >
                                            Ok
                                        </Button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default PopupCambiarRol;
