// Compnentes de React
import * as React from "react";

// Estilos
import "./style.css";

// Components propios
import { Logo, SubTitulo } from "../../componentsBarrel";



// Componente propiamente dicho
const Footer = () => {

const arrayLogo =  [
    {Facebook: "../../../assets/png/Icono-facebook.png"},
    {Mail: "../../../assets/png/Icono-mail.png"},
    {Instagram: "../../../assets/png/Icono-instagram.png"}
];
const {Facebook, Mail, Instagram} = arrayLogo;

    return (
    <footer>
        <div className="iconConteiner">
            <a href="#"> <Logo src= {Facebook} alt= "Link a cuenta de Facebook" /> </a>
            <a href="#"> <Logo src= {Mail} alt= "Link para envio de Mail" /> </a>
            <a href="#"> <Logo src= {Instagram} alt= "Link a cuenta de Instagram" /> </a>
        </div>
        <SubTitulo texto="© Anlu Juegos. Todos los derechos reservados." />        
    </footer>
    );
};

export default Footer;