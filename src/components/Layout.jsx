import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const localizacion = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-green-600 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM Pacientes
        </h2>

        <nav className="mt-10">
          <Link
            to="/"
            className={`${
              localizacion.pathname === "/"
                ? "text-green-300 block text-2xl mt-2 font-black "
                : "text-white text-2xl mt-2 block hover:text-green-300 "
            }`}
          >
            Home
          </Link>
          <Link
            className={`${
              localizacion.pathname === "/clientes/nuevo"
                ? "text-green-300  text-2xl mt-2 block font-black"
                : "text-white text-2xl mt-2 block hover:text-green-300"
            }`}
            to="/clientes/nuevo"
          >
            Nuevo paciente
          </Link>
        </nav>
      </aside>

      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
