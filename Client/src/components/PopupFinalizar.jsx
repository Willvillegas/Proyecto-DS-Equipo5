import { useState } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react' 
function PopupFinalizar({ isOpenF, close, finalizar }) {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFiles([...event.target.files]);
    };
    const handleFinalizar = () => {
        finalizar(selectedFiles);
        close();
    }
    return (
        <>
            <Transition appear show={isOpenF}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    {/* Aplicar el desenfoque al fondo cuando el diálogo está activo */}
                    <Transition
                        as="div"
                        className="fixed inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur"
                        show={isOpenF}
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
                                        ¿Desea finalizar la actividad?
                                    </DialogTitle>
                                    <p className="mt-2 text-sm/6 text-white/50">
                                        Una vez que es finalizada la actividad, no se podrá volver activar.
                                    </p>
                                    <div className="mt-4">
                                        {/*Crear una x en la parte superior derecha */}
                                        
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
                                        <div className="border border-dashed border-gray-500 relative">
                                            <input
                                                type="file"
                                                multiple
                                                className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
                                                onChange={handleFileChange}
                                            />
                                            <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                                                
                                                {selectedFiles.length == 0 ? 
                                                    <div>
                                                        <h4 className="text-base/7 font-medium text-white">
                                                        Suba un archivo o arrastre y suelte aquí
                                                        </h4>
                                                    </div>
                                                    :
                                                    <div>
                                                        <h2 className="text-base/7 font-medium text-white">Archivos Seleccionados:</h2>
                                                        <ul>
                                                        {selectedFiles.map((file, index) => (
                                                            <li key={index} className="text-base/7 font-medium text-white">{file.name}</li>
                                                        ))}
                                                        </ul>
                                                    </div>
                                                }
                                                
                                            </div>
                                            {/* Optional: Display the selected file names */}
                                            
                                        </div>
                                        <Button 
                                            disabled={selectedFiles.length == 0}
                                            className="w-full mt-3 text-center inline-flex items-center justify-center   gap-2 rounded-md bg-indigo-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-green-500 data-[open]:bg-red-600 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={handleFinalizar} // Aquí se llama a la función para cerrar el diálogo
                                        >
                                            Finalizar actividad
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

export default PopupFinalizar;
