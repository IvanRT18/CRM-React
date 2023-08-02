export async function obtenerClientes() {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const result = await response.json();
  return result;
}

export async function obtenerCliente(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const result = await response.json();
  return result;
}

export async function agregaCliente(cliente) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}
