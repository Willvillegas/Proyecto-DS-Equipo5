import React, { useState } from 'react';

const PopupArchivo = ({ onFileSelect, onCancel }) => {
  const [popupOpen, setPopupOpen] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileSelect(selectedFile);
      setPopupOpen(false);
    }
  };

  const handleClose = () => {
    setPopupOpen(false);
    if (onCancel) onCancel();
  };

  return (
    <>
      {popupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-gray-750 p-6 rounded-lg shadow-xl">
            <input
              id="picture"
              type="file"
              accept=".xlsx, .xls, .csv"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-900 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
              onChange={handleFileSelect}
            />
            <div className="flex justify-end mt-4">
              <button onClick={handleClose} className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-2">Cancelar</button>
              <button onClick={handleUpload} className={`text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ${selectedFile ? '' : 'opacity-50 cursor-not-allowed'}`}>Cargar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupArchivo;
