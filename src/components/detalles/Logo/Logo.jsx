// Compnentes de React

// Estilos
import "./style.css";

// Components propios


// Componente propiamente dicho

const Logo = (props) => {
const {src, alt} = props;

    return (
     <img src={src} alt={alt} className="logo"/>
    );
};

export default Logo;