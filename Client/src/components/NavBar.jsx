import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, useAuthContext } from "../context/AuthContext";

const links = [
{
    name: "Menu",
    href: "menu", 
},
{
    name: "Equipo Guía",
    href: "/equipo-guia", 
},
{
    name: "Estudiantes",
    href: "/estudiantes",  
},
{
    name: "Plan de trabajo",
    href: "/plan-trabajo",  
},
];

const NavBar = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        dispatch({ type: 'LOGOUT', payload: null })
        navigate('/')
    }

    return (
        <nav className={`bg-gray-900 fixed w-full top-0 z-20 flex items-center justify-between h-16`}>
        <div className="flex space-x-4  ">
            {links.map((x) => (
                <div key={x.name} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link to={x.href}>{x.name}</Link>
                </div>
            ))}
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={handleSubmit}>
                Cerrar Sesion
            </div>
        </div>
        </nav>
        
    );
};

export default NavBar;