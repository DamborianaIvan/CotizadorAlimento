export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Simulador de ración diaria para perros y gatos
          </h1>
          <p className="text-indigo-100 mt-1 max-w-2xl">
            Ingresá los datos de tu mascota y compará diferentes planes de
            alimentación según su peso, tamaño, edad y nivel de actividad.
          </p>
        </div>
      </div>
    </header>
  );
}
