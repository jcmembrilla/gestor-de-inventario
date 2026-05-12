// Una interfaz en TypeScript es como un contrato que define la forma de un objeto
// En este caso, cada equipo tendrá un id, nombre, categoría y estado
// La categoría solo puede ser una de las siguientes opciones y lo mismo para el estado
// Esto nos ayuda a evitar errores y a tener un código más claro y mantenible
export interface Equipo {
  id: number;
  nombre: string;
  categoria: "Netbook" | "Monitor" | "Periférico" | "Redes" | "CPU";
  estado: "Disponible" | "En Uso" | "En Reparación";
}
