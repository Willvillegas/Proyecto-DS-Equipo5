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
                        <form onSubmit={handleSubmit}>
                        <input type="text" value={actividad} onChange={handleInputChange} />
                        <button type="submit">Add</button>
                    </form>
                    {error && <p>{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddActividad;