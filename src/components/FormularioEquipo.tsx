import { useState } from "react";
import type { Equipo } from "../types/inventario";

interface FormularioProps {
  onAgregar: (nuevoEquipo: Equipo) => void;
}

export const FormularioEquipo = ({ onAgregar }: FormularioProps) => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState<Equipo["categoria"]>("Netbook");

  // Corregimos el tipo a React.FormEvent
  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();

    if (nombre.trim() === "") return;

    const nuevo: Equipo = {
      id: Date.now(),
      nombre,
      categoria,
      estado: "Disponible",
    };

    onAgregar(nuevo);
    setNombre("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
    >
      <div className="flex-1 flex flex-col gap-1">
        <label className="text-xs font-bold text-gray-500 uppercase ml-1">
          Nombre del Equipo
        </label>
        <input
          type="text"
          placeholder="Ej: Monitor LG 24'"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-gray-500 uppercase ml-1">
          Categoría
        </label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value as Equipo["categoria"])}
          className="p-3 rounded-lg border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all cursor-pointer"
        >
          <option value="Netbook">Netbook</option>
          <option value="Monitor">Monitor</option>
          <option value="Periférico">Periférico</option>
          <option value="Redes">Redes</option>
          <option value="CPU">CPU</option>
        </select>
      </div>

      <button
        type="submit"
        className="self-end md:mb-0 px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-100 cursor-pointer"
      >
        Añadir Equipo
      </button>
    </form>
  );
};
