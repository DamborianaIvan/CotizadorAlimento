import PlanCard from "./PlanCard";

export default function PlansList({ plans, petName }) {
  if (!plans || plans.length === 0) {
    return (
      <section className="bg-white rounded-2xl shadow-sm border border-dashed border-slate-300 p-4 md:p-5 flex items-center justify-center min-h-[180px]">
        <p className="text-sm text-slate-500 text-center">
          Ingresá los datos de tu mascota para ver las recomendaciones
          de alimentación.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-5">
      <div className="flex items-center justify-between gap-2 mb-3">
        <h2 className="text-lg font-semibold text-slate-800">
          Planes de alimentación{" "}
          {petName && (
            <span className="text-indigo-600">para {petName}</span>
          )}
        </h2>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
