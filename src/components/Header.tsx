interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="relative bg-linear-to-r from-indigo-900 via-slate-900 to-indigo-900 text-white py-12 px-6 shadow-2xl overflow-hidden">
      {/* Decoración abstracta de fondo (estilo técnico/redes) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-indigo-400)_1px,_transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
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
