import React from "react";
import { Link } from "react-router-dom";

const links = [
{
    name: "ForgotPasswordPage",
    href: "/forgot-password-page", 
},
{
    name: "ResetPasswordPage",
    href: "/reset-password-page", 
},
{
    name: "AssistantMenu",
    href: "assistant-menu", 
},



];

const NavBar = () => {
    return (
        <div>
            {links.map((x) => (
            <Link to={x.href}>{x.name}</Link>
            ))}
        </div>
    );
};

export default NavBar;