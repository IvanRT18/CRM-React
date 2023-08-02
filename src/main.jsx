import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NuevoCliente, {
  action as nuevoClienteAction,
} from "./pages/NuevoCliente";
import Index, { loader as clienteLoader } from "./pages/Index";
import ErrorPage from "./components/ErrorPage";
import EditarCliente from "./pages/EditarCliente";
import { loader as editarClienteLoader } from "./pages/EditarCliente";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, //Todos los hijos tendran este layout
    children: [
      {
        //Cuando ponemos index: true, es que esto es lo que se verá en la pagina
        //De inicio (home)
        index: true,
        element: <Index />,
        loader: clienteLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: editarClienteLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
