import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregaCliente } from "../data/clientes";

export async function action({ request }) {
  const FormData = await request.formData();

  // const entries2 = [...FormData];
  const datos = Object.fromEntries(FormData);

  const errores = [];
  //Validación
  if (Object.values(datos).includes("")) {
    errores.push("Hay uno o más campos vacíos");
  }

  //Validación del email
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(FormData.get("email"))) {
    errores.push("Email no es válido");
  }

  //Retorno si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  //Agrega cliente si no hay errores
  await agregaCliente(datos);

  //Despues de agregar al cliente redireccionamos al usuario a la pagina principal
  return redirect("/");
}

const NuevoCliente = () => {
  const errores = useActionData();
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

      {errores?.length > 0 &&
        errores.map((error, index) => <Error key={index}>{error}</Error>)}

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        <Form method="post" noValidate>
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
