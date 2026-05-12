// src/App.tsx
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import type { Equipo } from "./types/inventario";
import { FormularioEquipo } from "./components/FormularioEquipo";

function App() {
  const [lista, setLista] = useState<Equipo[]>([]); // Empezamos con lista vacía
  const [cargando, setCargando] = useState(true); // Estado de carga inicialmente true, porque vamos a simular la carga de datos
  const [filtro, setFiltro] = useState<string>("Todos"); // Estado para el filtro de categoría, por defecto "Todos"

  // 2. Simulamos la llamada a una API
  useEffect(() => {
    console.log("El componente se montó. Pidiendo datos...");

    const obtenerDatos = async () => {
      // Simulamos un retraso de red de 2 segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const datosIniciales: Equipo[] = [
        {
          id: 1,
          nombre: "Netbook G7",
          categoria: "Netbook",
          estado: "Disponible",
        },
        {
          id: 2,
          nombre: "Monitor Samsung 19",
          categoria: "Monitor",
          estado: "En Uso",
        },
      ];

      setLista(datosIniciales);
      setCargando(false); // Ya tenemos los datos, dejamos de cargar
    };
    obtenerDatos();
  }, []); // [] asegura que solo se ejecute al cargar la app

  const eliminarEquipo = (id: number) => {
    setLista(lista.filter((equipo) => equipo.id !== id));
  };

  const cambiarEstado = (id: number) => {
    const nuevaLista: Equipo[] = lista.map((equipo) => {
      if (equipo.id === id) {
        return {
          ...equipo,
          estado:
            equipo.estado === "Disponible" ? "En Reparación" : "Disponible",
        };
      }
      return equipo;
    });
    setLista(nuevaLista);
  };

  // LÓGICA DE FILTRADO (Dato derivado)
  const listaFiltrada = lista.filter((equipo) => {
    if (filtro === "Todos") return true;
    return equipo.categoria === filtro;
  });

  const agregarEquipo = (nuevoEquipo: Equipo) => {
    // Aplicamos inmutabilidad: nueva lista = [...viejaLista, nuevoElemento] esto sigmifica que
    // no modificamos la lista original, sino que creamos una nueva con el nuevo equipo agregado al final.
    setLista([...lista, nuevoEquipo]);
  };

  // src/App.tsx (Resumen del return con Tailwind v4)
  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        title="Gestor de Inventario"
        subtitle='Escuela Técnica N°1 "Juan Labat"'
      />

      <main className="p-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <FormularioEquipo onAgregar={agregarEquipo} />
        </div>

        <section className="mb-6 flex flex-col md:flex-row md:items-center gap-4 bg-indigo-50 p-4 rounded-lg">
          <label className="font-medium text-indigo-900">
            Filtrar por categoría:
          </label>
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white p-2"
          >
            <option value="Todos">Todos los equipos</option>
            <option value="Netbook">Netbooks</option>
            <option value="Monitor">Monitores</option>
            <option value="Periférico">Periféricos</option>
            <option value="Redes">Equipos de Red</option>
            <option value="CPU">CPU</option>
          </select>
          <span className="text-indigo-700 font-bold">
            {listaFiltrada.length} unidades encontradas
          </span>
        </section>

        {cargando ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listaFiltrada.map((equipo) => (
              <div key={equipo.id} className="flex flex-col gap-2">
                <ProductCard
                  {...equipo}
                  onCambiarEstado={() => cambiarEstado(equipo.id)}
                />
                <button
                  onClick={() => eliminarEquipo(equipo.id)}
                  className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors py-2 rounded-md font-medium text-sm border border-red-200"
                >
                  Eliminar Equipo
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
