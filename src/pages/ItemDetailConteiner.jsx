// Compnentes de React
import { useState } from 'react'
import { useParams } from "react-router-dom";
// Estilos
import "./style.css";

// Components propios
import { pedirProductoPorId } from "../hookLibrary/functionLibrary";
import ProductDetail from "../components/contenedores/ProductDetail/ProductDetail";

// Componente propiamente dicho
const ItemDetailConteiner = () => {

  // HOOKS   
  const [product, setProduct] = useState({})
  const [isLoading, setisLoading] = useState(true)

  // PROPS
  const {id} = useParams()
  setProduct = pedirProductoPorId(id);

  return (
    <div>
      {product && <ProductDetail producto= {product} />}
    </div>
   );

};

export default ItemDetailConteiner;


