import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="space-y-5">
      <h1 className="text-green-500 font-extrabold text-6xl text-center">
        CRM Pacientes
      </h1>
      <p className="text-center text-2xl">Hubo un error</p>
      <p className="text-center">{error.message}</p>
    </div>
  );
};
export default ErrorPage;
