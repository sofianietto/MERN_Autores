
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import NotFund from "../pages/NotFund";
import AutorDetalle from "../pages/autors/AutorDetalle";
import Autors from "../pages/autors/Autors";
import AutorsAdd from "../pages/autors/AutorsAdd";
import AutorEditar from '../pages/autors/AutorEditar'

export default createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFund />,
        children: [
            {
                path:'/',
                element: <Autors />
            },
            {
                path:'autors/agregar',
                element: <AutorsAdd />
            },
            {
                path:'autors/:id',
                element: <AutorDetalle />
            },
            {
                path:'autors/:id/editar',
                element: <AutorEditar />
            },

        ]
    }
]);