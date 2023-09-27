import React from 'react'
import { useParams } from 'react-router-dom';
import { pedirProductoPorId } from '../../../hookLibrary/functionLibrary';
import { Descripcion, SubTitulo, Titulo } from '../../componentsBarrel';

export const ProductDetail = (props) => {
    
    const {imagen, titulo, precio, descripcion, stock} = props
    return (
    <div className='productDetail'>
        <img className= "--img" src={imagen} alt="ilustración de producto" />
        <div className='__infoBox'>
            <Titulo texto= {titulo} />
            <SubTitulo texto= {precio} />
            <Descripcion data= {descripcion} />
            <p>Quendan {stock}</p>
        </div>      
      
        <div className="__butonConteiner" >
            <button className="--button" onClick={addItemButton}>
                {BsFillCartPlusFill}
            </button>
            <button className="--button" onClick={removeItemButton}>
                {BsFillCartDashFill}
            </button>
        </div>
    </div>
  )
}

export default ProductDetail;