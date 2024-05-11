import React from "react";
import { Link } from "react-router-dom";

const links = [
{
    name: "Menu",
    href: "assistant-menu", 
},
{
    name: "Equipo Guia",
    href: "/equipo-guia", 
},
{
    name: "Estudiantes",
    href: "info-profesor",  
},
{
    name: "Plan de trabajo",
    href: "info-profesor",  
},


];

const NavBar = () => {
    return (
        <nav className={`bg-gray-900 fixed w-full top-0 z-20`}>
        <div className="flex space-x-4 ">
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