import React from "react";
import { Link } from "react-router-dom";

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
{
    name: "Actividades",
    href: "/actividad",
},


];

const NavBar = () => {
    return (
        <nav className={`bg-gray-900 fixed w-full top-0 z-20 flex items-center justify-between h-16`}>
        <div className="flex space-x-4  ">
            {links.map((x) => (
                <div key={x.name} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link to={x.href}>{x.name}</Link>
                </div>
            ))}
        </div>
        </nav>
        
    );
};

export default NavBar;