// Compnentes de React
import { useState, useEffect } from 'react'

// Estilos
import "./style.css";

// Components propios
import { pedirDatos } from '../../../hookLibrary/functionLibrary';
import { CajaDeProductos } from "../../componentsBarrel"
// Componente propiamente dicho

const ItemListContainer = (props) => {
const [productos, setProductos] = useState([]);
useEffect(() => {
  pedirDatos()
    .then ((res) => {
        setProductos(res)
    });
}, [])

    return (

    <div className='ItemListConteiner'>
        {props.children}
    </div>
  
    );
};

export default ItemListContainer;