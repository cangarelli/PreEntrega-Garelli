// Compnentes de React
import { BsFillCartPlusFill , BsFillCartDashFill  } from "react-icons/bs";

// Estilos
import "./style.css";

// Components propios

import { SubTitulo, TarjetaDeProducto } from "../../componentsBarrel";

// Componente propiamente dicho
const ItemList = (props) => {

  const {product, children} = props
  return (
   <div className="itemList">
      <SubTitulo texto= "Productos"/>
      {children}
      <div className="Gondola">
        {product.map(({prod}) => <TarjetaDeProducto producto={prod}/>)}
      </div>
      {children}
    </div>
  );
};
  
  export default ItemList;