// Modulos de REACT
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Modulos propios
import ItemListContainer from "../components/estructuras/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "../pages/ItemDetailConteiner.jsx"
const router = createBrowserRouter([
    {
      path: "/",
      element: <ItemListContainer />,
    },
    {
      path: "/item/:id",
      element: <ItemDetailContainer/>,
    },
    {
      path: "/category/:id",
      element: <ItemListContainer/>,
    },

  ]);
const Navegation = () =>{
    return (
    <RouterProvider router={router} />
    );
};
  
export default Navegation;