import type { Equipo } from "../types/inventario";

interface ProductCardProps extends Equipo {
  onCambiarEstado: () => void;
}

export const ProductCard = ({
  nombre,
  categoria,
  estado,
  onCambiarEstado,
}: ProductCardProps) => {
  // Lógica para colores dinámicos del badge
  const estadoStyles =
    estado === "Disponible"
      ? "bg-green-100 text-green-700 border-green-200"
      : "bg-amber-100 text-amber-700 border-amber-200";

  return (
    <div
      onClick={onCambiarEstado}
      className="group relative bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Decoración lateral para indicar categoría visualmente */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
          {nombre}
        </h3>
        <span className="text-xl grayscale group-hover:grayscale-0 transition-all">
          {categoria === "Netbook"
            ? "💻"
            : categoria === "Monitor"
              ? "🖥️"
              : "🔌"}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Categoría
          </span>
          <p className="text-sm font-medium text-gray-600 bg-gray-50 px-2 py-0.5 rounded">
            {categoria}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-50">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${estadoStyles}`}
          >
            <span
              className={`w-2 h-2 rounded-full ${estado === "Disponible" ? "bg-green-500" : "bg-amber-500"} animate-pulse`}
            />
            {estado}
          </div>

          <span className="text-sm text-indigo-400 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Cambiar 🔄
          </span>
        </div>
      </div>
    </div>
  );
};
