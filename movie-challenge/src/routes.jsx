import Home from './paginas/home/Home'
import Prueba from './paginas/prueba/Prueba'
import { createBrowserRouter } from "react-router-dom";
  
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/prueba",
        element: <Prueba/>,
    },
]);

export default routes