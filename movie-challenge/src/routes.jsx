import Home from './paginas/home/Home'
import Prueba from './paginas/prueba/Prueba'
import {
    createBrowserRouter,
} from "react-router-dom";
  
export default createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/prueba",
        element: <Prueba/>,
    },
]);
  