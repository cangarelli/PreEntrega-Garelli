// Compnentes de React
import { BsFillCartPlusFill , BsFillCartDashFill  } from "react-icons/bs";

// Estilos
import "./style.css";
import { SubTitulo, Titulo } from "../../componentsBarrel";

// Components propios


// Componente propiamente dicho

const ProductCard = (props) => {

    const {producto} = props;
    const {titulo, imagen, precio, stock, id} = producto;

    return (
      <div className= "card">
  
        <img className= "--img" src={imagen} alt="ilustración de producto" />
        <div className="__infoDiv">
         <Titulo texto= {titulo} />
         <SubTitulo texto= {precio} />
         <p>Quendan {stock}</p>
        </div>
 
        <Link to={`/product/${id}`} className= "--verDetalleButton">Ver detalle</Link>       

      </div>
    );
};

export default ProductCard;