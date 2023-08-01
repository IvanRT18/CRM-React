import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export function loader() {
  const clientes = [
    {
      id: 1,
      nombre: "Juan",
      telefono: 102013313,
      email: "juan@outlook.com",
      empresa: "BMW",
    },
    {
      id: 2,
      nombre: "Karen",
      telefono: 138198313,
      email: "karen@outlook.com",
      empresa: "General Motors",
    },
    {
      id: 3,
      nombre: "Josue",
      telefono: 31983913,
      email: "josue@outlook.com",
      empresa: "Google",
    },
    {
      id: 4,
      nombre: "Miguel",
      telefono: 319381983,
      email: "miguel@outlook.com",
      empresa: "Microsoft",
    },
    {
      id: 5,
      nombre: "Pedro",
      telefono: 1398198938,
      email: "pedro@outlook.com",
      empresa: "Facebook",
    },
  ];
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
