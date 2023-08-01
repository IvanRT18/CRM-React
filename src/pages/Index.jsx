import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerCliente } from "../data/clientes";

export function loader() {
  const clientes = obtenerCliente();
  return clientes;
}

const Index = () => {
  const clientes = useLoaderData();
  return (
    <>
      <h1 className="text-2xl font-black text-green-700">Pacientes</h1>
      <p className="mt-3">Administra a tus pacientes</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-green-800 text-white">
            <tr>
              <th className="p-2">Paciente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map((cliente) => {
              return <Cliente key={cliente.id} cliente={cliente} />;
            })}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10"></p>
      )}
    </>
  );
};
export default Index;
