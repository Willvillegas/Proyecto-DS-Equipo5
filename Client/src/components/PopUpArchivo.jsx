import React from 'react';

const PopupArchivo = ({ onFileSelect }) => {
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    onFileSelect(file);
  };

  return (
    <div className="grid w-full max-w-xs items-center gap-1.5">
      <label htmlFor="picture" className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Cargar Archivo</label>
      <input
        id="picture"
        type="file"
        accept=".xlsx, .xls, .csv"
        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
        onChange={handleFileSelect}
      />
    </div>
  );
};

export default PopupArchivo;
