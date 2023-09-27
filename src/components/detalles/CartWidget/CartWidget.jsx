// Modulos de REACT 
import { BsCart } from 'react-icons/bs';
import { useState } from 'react';

// Componentes propios

// CSS
import './style.css';

function CartWidget() {

  return (
    <div className='NavBar__CartWidget'>
      <BsCart size="25px"/>
      <p className='NavBar__CartWidget--p'>4</p>
    </div>
  );
};

export default CartWidget;