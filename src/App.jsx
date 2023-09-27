// REACT COMPONENTS
import { useState } from 'react'


// COMPONENTES PROPIOS
import { Footer, NavBar } from './components/componentsBarrel';

import Navegation from "./rutas/Navegation";


//ESTILOS
import './App.css';





function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar greetings="usario random" />
    <Navegation />
    <Footer />
    </>
  );
};

export default App;
