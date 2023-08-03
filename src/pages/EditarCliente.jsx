import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { editarcliente, obtenerCliente } from "../data/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function action({ request, params }) {
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

  //Edita cliente si no hay errores
  await editarcliente(params.clienteId, datos);

  //Despues de editar al cliente redireccionamos al usuario a la pagina principal
  return redirect("/");
}

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId);
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "El paciente no existe",
    });
  }
  return cliente;
}

const EditarCliente = () => {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();
  return (
    <>
      <h1 className="text-2xl font-black text-green-700">Edita paciente</h1>
      <p className="mt-3">Puedes modificar los datos de un paciente</p>

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
          <Formulario cliente={cliente} />

          <input
            type="submit"
            className="mt-5 w-full bg-green-800 p-3 uppercase font-bold text-white text-lg"
            value="Editar Paciente"
          />
        </Form>
      </div>
    </>
  );
};
export default EditarCliente;
