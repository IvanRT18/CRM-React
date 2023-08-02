import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente }) => {
  const { id, nombre, telefono, email, empresa } = cliente;
  const navigate = useNavigate();

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td className="p-6">
        <p className="text-gray-600">
          Email:
          <span className="text-gray-800 uppercase font-bold">{email}</span>
        </p>

        <p className="text-gray-600">
          Teléfono:
          <span className="text-gray-800 uppercase font-bold">{telefono}</span>
        </p>
      </td>

      <td className="p-6 flex gap-3">
        <button
          type="button"
          className="text-green-600 hover:text-green-700 uppercase font-bold text-xs"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>

        <button
          type="button"
          className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
export default Cliente;
