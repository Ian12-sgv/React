interface JsonMenu {
  titulo: string;

  color: string;
}

// Definir la interfaz para la estructura de datos del JSON

// Función para emular la obtención de productos desde una API REST

function obtenerMenus(): Promise<JsonMenu[]> {
  // Simular la consulta a la API (en este caso, se utiliza un arreglo en memoria)

  const JsonMenu: JsonMenu[] = [
    { titulo: "hola1", color: "white" },

    { titulo: "hola2", color: "white" },

    { titulo: "hola3", color: "white" },
  ];

  // Retornar una promesa que resuelve con el arreglo de productos en formato JSON

  return Promise.resolve(JsonMenu);
}

export { obtenerMenus };
export type { JsonMenu };
