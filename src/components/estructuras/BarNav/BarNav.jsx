// Compnentes de React
import  { Link } from "react-router-dom"
import { useState } from 'react'

// Estilos
import "./style.css";

// Components propios
import { Carrito, Logo } from "../../componentsBarrel";

// Componente propiamente dicho

const NavBar = (props) => {
    const {greetings} = props;
    return (
        <nav className="navBar">
            <div className='conteiner'>
                <Link to= {"./"}> <Logo src= "../../../assets/png/ANLU-PLAY.png" alt= "Icono de acceso a pagina princial" /></Link>
                <div className='NavBar__ItemListConteiner'>
                    <span className='NavBar__ItemListConteine--span'>¡Bienvendio {greetings}!</span>
                    <Link to= "#" className='NavBar__ItemListConteine--button'>
                        Pantalones
                    </Link>
                    <Link to="#" className='NavBar__ItemListConteine--button'>
                        Medias
                    </Link>
                    <Link to="#" className='NavBar__ItemListConteine--button'>
                        Remeras
                    </Link> 
                    <Link to="#" className='NavBar__ItemListConteine--button'>
                        Buzos
                    </Link> 
                </div>
                <Carrito />
            </div>
        </nav>
    );
};

export default NavBar;