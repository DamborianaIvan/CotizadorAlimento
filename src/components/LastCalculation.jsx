export default function LastCalculation({ lastCalc }) {
  if (!lastCalc) return null;

  const fecha = new Date(lastCalc.date);

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-5">
      <div className="flex items-center justify-between gap-2 mb-2">
        <h2 className="text-base font-semibold text-slate-800">
          Último cálculo guardado
        </h2>
        <span className="text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-500 uppercase tracking-wide">
          {fecha.toLocaleString()}
        </span>
      </div>

      <p className="text-sm text-slate-700 mb-1">
        Mascota:{" "}
        <span className="font-semibold">
          {lastCalc.petName} ({lastCalc.species})
        </span>
      </p>
      <p className="text-xs text-slate-600 mb-2">
        Peso: {lastCalc.weight} kg · Tamaño: {lastCalc.size} · Edad:{" "}
        {lastCalc.ageStage} · Actividad: {lastCalc.activityLevel} ·
        Condición: {lastCalc.bodyCondition}
      </p>

      <div className="mt-2 rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-2 text-xs text-emerald-900">
        <p className="font-medium">
          Plan estándar sugerido:{" "}
          <span className="font-semibold">
            {lastCalc.mainPlan?.nombre}
          </span>
        </p>
        <p>
          {lastCalc.mainPlan?.gramosDia} g/día ·{" "}
          {lastCalc.mainPlan?.gramosPorComida} g x{" "}
          {lastCalc.mainPlan?.comidas} comidas.
        </p>
      </div>
    </section>
  );
}
