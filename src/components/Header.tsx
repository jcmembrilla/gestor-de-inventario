import logoTecnica from "../assets/logo-tecnica.png";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="relative bg-linear-to-r from-indigo-900 via-slate-900 to-indigo-900 text-white py-12 px-6 shadow-2xl overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-indigo-400)_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>

      {/* Contenedor principal: usamos flex flex-col e items-center para centrar todo */}
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Contenedor del Logo: Definimos ancho y alto iguales (h-24 w-24) para que sea un círculo perfecto */}
        <div className="mb-6 h-40 w-40 md:h-48 md:w-48 flex items-center justify-center bg-white p-1 rounded-full shadow-xl border-4 border-indigo-400/30">
          <img
            src={logoTecnica}
            alt="Logo Escuela Técnica"
            className="h-full w-full object-cover rounded-full"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 drop-shadow-md">
          {title}
        </h1>

        {subtitle && (
          <div className="inline-block relative">
            <p className="text-indigo-200 text-lg md:text-xl font-medium tracking-wide uppercase italic">
              {subtitle}
            </p>
            <div className="h-1 w-full bg-indigo-500 rounded-full mt-1 opacity-50" />
          </div>
        )}
      </div>
    </header>
  );
};
