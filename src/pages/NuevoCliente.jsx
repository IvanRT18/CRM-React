import { Form, useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

export function action() {
  console.log("Formulario envaido");
  return { ok: true };
}

const NuevoCliente = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-2xl font-black text-green-700">Nuevo paciente</h1>
      <p className="mt-3">
        Llena todos los campos para agregar un nuevo paciente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-green-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        <Form method="post">
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-green-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar Paciente"
          />
        </Form>
      </div>
    </>
  );
};
export default NuevoCliente;
