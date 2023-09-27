// Compnentes de React

// Estilos
import "./style.css";

// Components propios


// Componente propiamente dicho

const DescriptionText = (props) => {
    const {data} = props;
    return (
        <p>
            {data}
        </p>
    );
};

export default DescriptionText;