export default function PlanCard({ plan }) {
  return (
    <article className="flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-baseline justify-between gap-2 mb-2">
        <h3 className="text-base font-semibold text-slate-800">
          {plan.nombre}
        </h3>
        <span className="text-xs font-medium uppercase tracking-wide text-indigo-500">
          {plan.gramosDia} g / día
        </span>
      </div>

      <p className="text-sm text-slate-600 mb-3">
        {plan.descripcion}
      </p>

      <div className="mt-auto rounded-xl bg-indigo-50 border border-indigo-100 px-3 py-2 text-xs text-slate-700">
        <p>
          Dividir en{" "}
          <span className="font-semibold">{plan.comidas}</span>{" "}
          comidas de{" "}
          <span className="font-semibold">
            {plan.gramosPorComida} g
          </span>{" "}
          cada una.
        </p>
      </div>
    </article>
  );
}
